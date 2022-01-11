import Head from 'next/head';
import { Plant } from './Plant';

interface PlantStructuredDataProps{
  plant:Plant
}

export function PlantStructuredData({
  plant: {
    name,
    images,
    description,
    id,
    price,
  },
}:PlantStructuredDataProps) {
  const stringData = JSON.stringify({
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    image: images.map((image) => image.uri),
    description,
    sku: id,
    brand: null,
    priceValidUntil: null,
    offers: {
      '@type': 'Offer',
      url: `https://suasplantas.com/plants/${id}`,
      priceCurrency: 'BRL',
      price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
  });

  return (
    <Head>
      <script type="application/ld+json">
        { stringData}
      </script>
    </Head>
  );
}
