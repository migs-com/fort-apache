import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticles, getArticleBySlug } from '@/lib/notion';
import { renderMarkdown } from '@/lib/markdown';

type Props = {
  params: { slug: string };
};

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Article introuvable' };
  }
  return {
    title: article.title,
    description: article.excerpt || undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      type: 'article',
      publishedTime: article.date,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

function formatDate(date: string): string {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const html = renderMarkdown(article.markdown);

  return (
    <article>
      <header className="bg-foret-dark text-creme pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container-narrow">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-1 text-sable-light text-sm hover:text-white mb-6"
          >
            ← Retour aux actualités
          </Link>
          <time
            dateTime={article.date}
            className="text-xs uppercase tracking-[0.2em] text-sable-light"
          >
            {formatDate(article.date)}
          </time>
          <h1 className="text-white mt-3 mb-4">{article.title}</h1>
          {article.excerpt && (
            <p className="text-lg text-creme/85">{article.excerpt}</p>
          )}
        </div>
      </header>

      {article.coverImage && (
        <div className="relative max-w-4xl mx-auto -mt-8 px-4">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="section bg-creme">
        <div
          className="container-narrow prose-fort"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </article>
  );
}
