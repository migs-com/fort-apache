import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

// Image utilisée quand un article n'a pas d'image de couverture dans Notion :
// la photo du club de la page d'accueil, en attendant les photos des articles.
export const DEFAULT_ARTICLE_COVER = '/photos/hero-fort-apache.jpg';

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

  // Un article n'apparaît sur le site que si sa case « Published » est
  // cochée. Sans la case, il reste un brouillon : on évite ainsi de mettre
  // en ligne par erreur un texte en cours de relecture.
  if (!publishedProp || publishedProp.checkbox !== true) return null;

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

// Les pages du blog sont construites à chaque visite. Pour ne pas interroger
// Notion à chaque fois (lenteur, limite de 3 appels par seconde), la liste
// des articles et le texte de chaque article restent en mémoire 5 minutes :
// un article publié dans Notion apparaît donc sur le site en 5 minutes au plus.
// Une erreur Notion n'est jamais mise en mémoire : la visite suivante réessaie.
const CACHE_SECONDS = 300;

const fetchArticlesCached = unstable_cache(
  async (): Promise<Article[]> => {
    const client = getClient();
    if (!client || !databaseId) return [];

    const response = await client.databases.query({
      database_id: databaseId,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 50,
    });

    // Tri par date de publication (champ Date), la plus récente d'abord,
    // et non par date de création de la page dans Notion.
    return response.results
      .map(mapPageToArticle)
      .filter((a): a is Article => a !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
  ['notion-articles'],
  { revalidate: CACHE_SECONDS, tags: ['notion'] }
);

const fetchMarkdownCached = unstable_cache(
  async (pageId: string): Promise<string> => {
    const client = getClient();
    if (!client) return '';
    const n2m = new NotionToMarkdown({ notionClient: client });
    const blocks = await n2m.pageToMarkdown(pageId);
    return n2m.toMarkdownString(blocks).parent;
  },
  ['notion-article-markdown'],
  { revalidate: CACHE_SECONDS, tags: ['notion'] }
);

export const getArticles = cache(async (): Promise<Article[]> => {
  try {
    return await fetchArticlesCached();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[notion] getArticles failed', e);
    return [];
  }
});

export const getArticleBySlug = cache(
  async (slug: string): Promise<ArticleWithContent | null> => {
    if (!apiKey || !databaseId) return null;

    const articles = await getArticles();
    const article = articles.find((a) => a.slug === slug);
    if (!article) return null;

    try {
      const markdown = await fetchMarkdownCached(article.id);
      return { ...article, markdown };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('[notion] getArticleBySlug failed', e);
      return { ...article, markdown: '' };
    }
  }
);
