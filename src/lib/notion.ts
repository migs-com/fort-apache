import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string | null;
};

export type ArticleWithContent = Article & {
  markdown: string;
};

const apiKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

function getClient(): Client | null {
  if (!apiKey) return null;
  return new Client({ auth: apiKey });
}

/**
 * Extract plain text from a Notion rich text array.
 */
function richText(rt: unknown): string {
  if (!Array.isArray(rt)) return '';
  return rt
    .map((item) => (item as { plain_text?: string }).plain_text ?? '')
    .join('');
}

/**
 * Extract a cover image URL from a Notion page object.
 */
function extractCover(page: unknown): string | null {
  const cover = (page as { cover?: unknown }).cover as
    | { type: string; external?: { url: string }; file?: { url: string } }
    | null
    | undefined;
  if (!cover) return null;
  if (cover.type === 'external' && cover.external) return cover.external.url;
  if (cover.type === 'file' && cover.file) return cover.file.url;
  return null;
}

function mapPageToArticle(page: unknown): Article | null {
  const p = page as {
    id: string;
    properties: Record<string, unknown>;
    created_time: string;
  };

  const props = p.properties;

  const titleProp = (props.Title ?? props.Name ?? props.Titre) as
    | { title?: unknown[] }
    | undefined;
  const slugProp = props.Slug as { rich_text?: unknown[] } | undefined;
  const excerptProp = (props.Excerpt ?? props.Extrait) as
    | { rich_text?: unknown[] }
    | undefined;
  const dateProp = (props.Date ?? props.PublishedAt) as
    | { date?: { start?: string } }
    | undefined;
  const publishedProp = (props.Published ?? props.Publie ?? props.Publié) as
    | { checkbox?: boolean }
    | undefined;

  // Only surface explicitly published articles if the property exists
  if (publishedProp && publishedProp.checkbox === false) return null;

  const title = richText(titleProp?.title);
  if (!title) return null;

  const slug =
    richText(slugProp?.rich_text) ||
    title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

  return {
    id: p.id,
    slug,
    title,
    excerpt: richText(excerptProp?.rich_text),
    date: dateProp?.date?.start ?? p.created_time,
    coverImage: extractCover(page),
  };
}

export async function getArticles(): Promise<Article[]> {
  const client = getClient();
  if (!client || !databaseId) return [];

  try {
    const response = await client.databases.query({
      database_id: databaseId,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 50,
    });

    return response.results
      .map(mapPageToArticle)
      .filter((a): a is Article => a !== null);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[notion] getArticles failed', e);
    return [];
  }
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleWithContent | null> {
  const client = getClient();
  if (!client || !databaseId) return null;

  const articles = await getArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  try {
    const n2m = new NotionToMarkdown({ notionClient: client });
    const blocks = await n2m.pageToMarkdown(article.id);
    const md = n2m.toMarkdownString(blocks);
    return { ...article, markdown: md.parent };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[notion] getArticleBySlug failed', e);
    return { ...article, markdown: '' };
  }
}
