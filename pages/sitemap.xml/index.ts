import { GetServerSideProps } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default function Sitemap() {}

interface SitemapUrl{
 url:string
 changefreq:'daily'|'monthly'
 priority:number
}

function coisa(links:SitemapUrl[]) {
  const stream = new SitemapStream({ hostname: 'https://suasplantas.com' });

  return streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString());
}

export const getServerSideProps:GetServerSideProps = async ({ res }) => {
  const coisas = [70, 71];

  const links = coisas.map((id) :SitemapUrl => ({
    url: `/plants/${id}`,
    changefreq: 'daily',
    priority: 0.9,
  }));
  const result = await coisa(links);

  res.setHeader('Content-Type', 'text/xml');
  res.write(result);
  res.end();

  return { props: {} };
};
