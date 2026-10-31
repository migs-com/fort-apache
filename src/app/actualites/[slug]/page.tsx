import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, DEFAULT_ARTICLE_COVER } from '@/lib/notion';
import { renderMarkdown } from '@/lib/markdown';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: { slug: string };
};

// La mise en page commune du site lit la langue dans l'en-tête de chaque
// requête : aucune page ne peut donc être figée à l'avance. Un article publié
// dans Notion après la mise en ligne du site faisait planter sa page (erreur
// 500). La page est désormais construite à chaque visite ; les données Notion
// restent en mémoire quelques minutes (voir src/lib/notion.ts).
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Article introuvable' };
  }
  const cover = coverUrl(article.coverImage);
  return {
    title: article.title,
    description: article.excerpt || undefined,
    alternates: {
      canonical: `${siteConfig.url}/actualites/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      type: 'article',
      publishedTime: article.date,
      images: [cover],
    },
  };
}

// Adresse complète de l'image de couverture (les réseaux sociaux et Google
// exigent une adresse complète, pas un chemin relatif).
function coverUrl(coverImage: string | null): string {
  const src = coverImage ?? DEFAULT_ARTICLE_COVER;
  return src.startsWith('/') ? `${siteConfig.url}${src}` : src;
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
  const articleUrl = `${siteConfig.url}/actualites/${article.slug}`;

  // Données structurées de l'article : aide Google à le reconnaître comme
  // un article daté, publié par le club.
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt || undefined,
    datePublished: article.date,
    dateModified: article.date,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    inLanguage: 'fr-FR',
    image: [coverUrl(article.coverImage)],
    author: {
      '@type': 'Organization',
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    publisher: {
      '@id': `${siteConfig.url}#localbusiness`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <header className="bg-foret-dark text-creme pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container-narrow">
          <Link
            href="/actualites"
            className="flex w-fit items-center gap-1 text-sable-light text-sm hover:text-white mb-6"
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

      <div className="relative max-w-4xl mx-auto -mt-8 px-4">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={article.coverImage ?? DEFAULT_ARTICLE_COVER}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <section className="section bg-creme">
        <div
          className="container-narrow prose-fort"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      {/* Appel à l'action commun à tous les articles : le téléphone d'abord,
          c'est le contact que préfère le club. */}
      <section className="section bg-foret-dark text-creme">
        <div className="container-narrow text-center">
          <p className="font-serif text-2xl md:text-3xl text-white mb-3">
            Envie de venir au Col de Vence ?
          </p>
          <p className="text-creme/85 mb-6">
            Pénélope répond à vos questions et réserve votre créneau par
            téléphone, tous les jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block rounded-md bg-bordeaux px-6 py-3 font-medium text-white hover:opacity-90"
            >
              Appeler le {siteConfig.contact.phoneDisplay}
            </a>
            <Link
              href="/tarifs"
              className="inline-block rounded-md border border-sable-light px-6 py-3 font-medium text-sable-light hover:text-white"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
