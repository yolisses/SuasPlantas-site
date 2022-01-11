import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Plant } from '../types/Plant';
import { Header } from '../common/Header';
import { ListItem } from '../common/ListItem';
import { api } from '../api/api';
import { AddButton } from './AddButton';

interface HomePageProps {
  data: any;
}

export function HomePage({ data }: HomePageProps) {
  const [items, setItems] = useState(data?.content || []);
  const [lastData, setLastData] = useState(data || {});

  async function fetchItems() {
    const res = await api.get('plants', { params: { page: lastData.nextPage } });
    setLastData(res.data);
    setItems((items:Plant[]) => items.concat(res.data.content));
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />
      </Head>
      <Header />
      <InfiniteScroll
        next={fetchItems}
        dataLength={items.length}
        hasMore={!!lastData.nextPage}
        scrollThreshold={0.8}
        loader={(
          <div className="flex justify-center p-4">
            <CircularProgress />
          </div>
        )}
        endMessage={<div className="p-10" />}
      >
        <ul className="p-2 flex flex-col gap-1">
          {items.map((item: Plant) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </InfiniteScroll>
      <div className="fixed right-10 bottom-10">
        <AddButton />
      </div>
    </>
  );
}
