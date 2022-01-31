import { GetServerSideProps } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { api } from '../../api/api';
import { Plant } from '../../plant/Plant';

export default function Sitemap() {}

interface SitemapUrl{
 url:string
 changefreq:'daily'|'monthly'
 priority:number
 lastmod:string
}

function getSitemapXml(links:SitemapUrl[]) {
  const stream = new SitemapStream({ hostname: 'https://suasplantas.com' });

  return streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString());
}

export const getServerSideProps:GetServerSideProps = async ({ res }) => {
  const response :any = await api.get('plants/sitemap');

  const links = response.data.map((plant:Plant) :SitemapUrl => ({
    url: `/plants/${plant.id}`,
    changefreq: 'daily',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  }));

  links.push({
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date().toISOString(),
  });

  links.push({
    url: '/about',
    changefreq: 'monthly',
    priority: 1,
    lastmod: new Date().toISOString(),
  });

  links.push({
    url: '/contact',
    changefreq: 'monthly',
    priority: 1,
    lastmod: new Date().toISOString(),
  });

  links.push({
    url: '/privacy-policy',
    changefreq: 'monthly',
    priority: 1,
    lastmod: new Date().toISOString(),
  });

  const result = await getSitemapXml(links);

  res.setHeader('Content-Type', 'text/xml');
  res.write(result);
  res.end();

  return { props: {} };
};
