import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { getArticles } from '@/lib/notion';

// Pairs of FR/EN translated pages. Non-translated FR pages are listed as
// fr-only entries further down.
const translatedPagePairs: Array<{ fr: string; en: string }> = [
  { fr: '', en: '/en' },
  { fr: '/activites', en: '/en/activities' },
  { fr: '/tarifs', en: '/en/pricing' },
  { fr: '/contact', en: '/en/contact' },
];

const frOnlyPaths = ['/le-club', '/cours', '/stages', '/galerie', '/actualites'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;

  const translatedEntries: MetadataRoute.Sitemap = translatedPagePairs.flatMap(
    (pair) => {
      const frUrl = `${base}${pair.fr}`;
      const enUrl = `${base}${pair.en}`;
      const alternates = {
        languages: {
          fr: frUrl,
          en: enUrl,
          'x-default': frUrl,
        },
      };
      return [
        {
          url: frUrl,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: pair.fr === '' ? 1 : 0.7,
          alternates,
        },
        {
          url: enUrl,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: pair.en === '/en' ? 0.9 : 0.6,
          alternates,
        },
      ];
    }
  );

  const frOnlyEntries: MetadataRoute.Sitemap = frOnlyPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articles = await getArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...translatedEntries, ...frOnlyEntries, ...articleEntries];
}
