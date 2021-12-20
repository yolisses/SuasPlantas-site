import Head from 'next/head';
import { Header } from '../common/Header';
import { SelectLocationLink } from '../location/SelectLocationLink';
import { Plant } from '../types/Plant';
import { AddButton } from './AddButton';
import { ListItem } from '../common/ListItem';

interface HomeScreenProps {
  data: Plant[];
}

export function HomeScreen({ data }: HomeScreenProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="
          Site para trocar mudas de plantas com vários outros usuários.
          Super simples, seguro e com grande variedade."
        />
      </Head>
      <Header />
      <div className="flex flex-row justify-start">
        <SelectLocationLink />
      </div>
      <div className="p-2 flex flex-col gap-1">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </>
  );
}
