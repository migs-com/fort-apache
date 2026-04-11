import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { getArticles } from '@/lib/notion';

export const metadata: Metadata = {
  title: 'Blog & Actualités du club',
  description:
    'Le blog de Fort Apache : récits de stages, vie du club, portraits de cavaliers et de chevaux, conseils et coulisses.',
};

export const revalidate = 3600;

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

export default async function ActualitesPage() {
  const articles = await getArticles();

  return (
    <>
      <PageHeader overline="Blog & Actualités" title="Les dernières nouvelles du club">
        Récits de stages, vie du club, portraits de chevaux et de cavaliers,
        coulisses et moments forts.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto">
          {articles.length === 0 ? (
            <div className="max-w-xl mx-auto text-center text-charbon/70 bg-white rounded-lg border border-sable/40 p-10">
              <p className="font-serif text-2xl text-foret-dark mb-2">
                Le blog arrive très bientôt
              </p>
              <p>
                En attendant nos premiers articles, retrouvez toute la vie
                du club au quotidien sur Instagram et Facebook —
                <a
                  href="/#social-wall"
                  className="text-bordeaux underline ml-1"
                >
                  voir nos derniers posts
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/actualites/${article.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  {article.coverImage ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-sable/20">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-[16/10] bg-foret-dark/90 flex items-center justify-center text-sable-light font-serif text-xl"
                      aria-hidden
                    >
                      Fort Apache
                    </div>
                  )}
                  <div className="p-6">
                    <time
                      dateTime={article.date}
                      className="text-xs uppercase tracking-wide text-bordeaux"
                    >
                      {formatDate(article.date)}
                    </time>
                    <h2 className="font-serif text-2xl text-foret-dark mt-2 mb-3 group-hover:text-bordeaux transition">
                      {article.title}
                    </h2>
                    {article.excerpt && (
                      <p className="text-sm text-charbon/75 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}
                    <span className="mt-4 inline-block text-sm text-bordeaux font-medium">
                      Lire l&apos;article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
