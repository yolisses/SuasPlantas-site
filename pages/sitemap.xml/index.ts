import { Readable } from 'stream';
import { GetServerSideProps } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';

import { getSitemap } from '../../sitemap/getSitemap';
import { SitemapURL } from '../../sitemap/SitemapURL';

// required
export default function Sitemap() {}

async function sitemapsToXml(links:SitemapURL[]) {
  const stream = new SitemapStream({ hostname: 'https://suasplantas.com' });

  const data = await streamToPromise(
    Readable.from(links).pipe(stream),
  );

  return data.toString();
}

export const getServerSideProps:GetServerSideProps = async ({ res }) => {
  const links = await getSitemap();
  const result = await sitemapsToXml(links);

  res.setHeader('Content-Type', 'text/xml');
  res.write(result);
  res.end();

  return { props: {} };
};
