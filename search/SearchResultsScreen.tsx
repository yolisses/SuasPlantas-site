import { useRouter } from 'next/router';
import Head from 'next/head';
import { Header } from '../common/Header';
import { ListItem } from '../common/ListItem';
import { Plant } from '../types/Plant';

interface SearchResultsScreenProps {
  data: Plant[];
}

export function SearchResultsScreen({ data }: SearchResultsScreenProps) {
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>
          SuasPlantas:
          {' '}
          {query.q}
        </title>
      </Head>
      <Header searchQuery={query.q as string} />
      <div className="p-1 flex flex-col gap-1">
        {data.map((item: Plant) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
