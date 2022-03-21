import { SitemapURL } from './SitemapURL';

const now = new Date().toISOString();
export const staticLinks:SitemapURL[] = [
  {
    url: '/',
    priority: 1,
    lastmod: now,
    changefreq: 'daily',
  },
  {
    priority: 1,
    lastmod: now,
    url: '/landing',
    changefreq: 'daily',
  },
  {
    priority: 1,
    lastmod: now,
    url: '/about',
    changefreq: 'monthly',
  },
  {
    priority: 1,
    lastmod: now,
    url: '/contact',
    changefreq: 'monthly',
  },
  {
    priority: 1,
    lastmod: now,
    changefreq: 'monthly',
    url: '/privacy-policy',
  },
];
