import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { getArticles } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const staticPaths = [
    '',
    '/le-club',
    '/activites',
    '/cours',
    '/stages',
    '/tarifs',
    '/galerie',
    '/actualites',
    '/contact',
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const articles = await getArticles();
  const articleEntries = articles.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...articleEntries];
}
