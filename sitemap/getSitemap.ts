import { api } from '../api/api';
import { Plant } from '../plant/Plant';
import { SitemapURL } from './SitemapURL';
import { staticLinks } from './staticSitemaps';

export async function getSitemap() {
  const response :any = await api.get('plants/sitemap');

  const links:SitemapURL[] = staticLinks.concat(response.data.map((plant:Plant) :SitemapURL => ({
    url: `/plants/${plant.id}`,
    changefreq: 'daily',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  })));

  return links;
}
