import { GetServerSideProps } from 'next';

export default function Sitemap() {}

export const getServerSideProps:GetServerSideProps = async ({ res }) => {
  const coisas = [70, 71];

  const final = coisas.map((coisa) => `<url><loc>https://www.suasplantas.com/plants/${coisa}</loc><lastmod>2021-12-31T19:53:39+00:00</lastmod></url>`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${final}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};
