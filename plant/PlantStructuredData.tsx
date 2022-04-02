import Head from 'next/head';
import { Plant } from './Plant';

interface PlantStructuredDataProps{
  plant:Plant
}

export function PlantStructuredData({
  plant: {
    id,
    name,
    images,
    description,
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
      availability: 'https://schema.org/InStock',
      url: `https://suasplantas.com/plants/${id}`,
      itemCondition: 'https://schema.org/NewCondition',
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
