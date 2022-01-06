import Head from 'next/head';
import { Plant } from '../types/Plant';
import { AddButton } from './AddButton';
import { Header } from '../common/Header';
import { ListItem } from '../common/ListItem';

interface HomePageProps {
  data: Plant[];
}

export function HomePage({ data }: HomePageProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />
      </Head>
      <Header />
      {/* <div className="flex flex-row justify-start">
        <SelectLocationLink />
      </div> */}
      <ul className="p-2 flex flex-col gap-1">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="fixed right-10 bottom-10">
        <AddButton />
      </div>
    </>
  );
}
