import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { ffeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Activities.Metadata');
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/en/activities`,
      languages: {
        fr: `${siteConfig.url}/activites`,
        en: `${siteConfig.url}/en/activities`,
        'x-default': `${siteConfig.url}/activites`,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${siteConfig.url}/en/activities`,
      siteName: siteConfig.fullName,
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function ActivitiesENPage() {
  const tHeader = await getTranslations('Activities.Header');
  const tFeatured = await getTranslations('Activities.Featured');
  const tCards = await getTranslations('Activities.Cards');
  const tCta = await getTranslations('Activities.CtaBanner');

  const cards = [
    {
      slug: 'group-lessons',
      name: tCards('groupLessonsTitle'),
      excerpt: tCards('groupLessonsDesc'),
      image: ffeImages.album[6],
    },
    {
      slug: 'private-lessons',
      name: tCards('privateLessonsTitle'),
      excerpt: tCards('privateLessonsDesc'),
      image: ffeImages.album[7],
    },
    {
      slug: 'pony-school',
      name: tCards('ponySchoolTitle'),
      excerpt: tCards('ponySchoolDesc'),
      image: ffeImages.album[8],
    },
    {
      slug: 'trail-rides',
      name: tCards('trailRidesTitle'),
      excerpt: tCards('trailRidesDesc'),
      image: ffeImages.album[9],
    },
    {
      slug: 'camps',
      name: tCards('campsTitle'),
      excerpt: tCards('campsDesc'),
      image: ffeImages.article1,
    },
    {
      slug: 'boarding',
      name: tCards('boardingTitle'),
      excerpt: tCards('boardingDesc'),
      image: ffeImages.album[11],
    },
    {
      slug: 'competitions',
      name: tCards('competitionsTitle'),
      excerpt: tCards('competitionsDesc'),
      image: ffeImages.article2,
    },
  ];

  return (
    <>
      <PageHeader overline={tHeader('overline')} title={tHeader('title')}>
        {tHeader('subtitle')}
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto">
          <article
            id="pony-rides"
            className="group grid md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-lg scroll-mt-24"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden">
              <Image
                src={ffeImages.top3}
                alt={tFeatured('heading')}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 inline-block bg-bordeaux text-white text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
                {tFeatured('badge')}
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
                {tFeatured('eyebrow')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foret-dark mb-4">
                {tFeatured('heading')}
              </h2>
              <p className="text-charbon/85 mb-6 leading-relaxed">
                {tFeatured('text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <LinkButton
                  href="/en/contact?objet=Renseignements"
                  variant="primary"
                  size="md"
                >
                  {tFeatured('cta')}
                </LinkButton>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-creme pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cards.map((d) => (
              <article
                key={d.slug}
                id={d.slug}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow scroll-mt-24"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-foret-dark mb-2">
                    {d.name}
                  </h2>
                  <p className="text-charbon/80 text-sm leading-relaxed mb-4">
                    {d.excerpt}
                  </p>
                  <Link
                    href="/en/contact?objet=Renseignements"
                    className="inline-flex items-center gap-1 text-bordeaux text-sm font-medium hover:gap-2 transition-all"
                  >
                    {tCards('learnMore')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charbon text-white">
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-white mb-4">{tCta('heading')}</h2>
          <p className="text-creme/80 mb-8 max-w-xl mx-auto">
            {tCta('paragraph')}
          </p>
          <LinkButton href="/en/contact" variant="primary" size="lg">
            {tCta('cta')}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
