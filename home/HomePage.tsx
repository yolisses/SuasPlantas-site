import Head from 'next/head';
import { useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { api } from '../api/api';
import { Plant } from '../plant/Plant';
import { AddButton } from './AddButton';
import { Header } from '../common/Header';
import { GridItem } from '../common/GridItem';

interface HomePageProps {
  data: any;
  query:{[key:string]:string}
}

export function HomePage({ data, query }: HomePageProps) {
  const [items, setItems] = useState(data?.content || []);
  const [lastData, setLastData] = useState(data || {});

  async function fetchItems() {
    const res = await api.get('plants', {
      params: {
        page: lastData.nextPage,
        text: query.q,
        ...query,
      },
    });
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
        <div className="md:px-10">
          <Grid
            container
            columns={{ xs: 2, sm: 4, md: 5 }}
          >
            {items.map((item: Plant) => (
              <GridItem key={item.id} item={item} size={300} />
            ))}
          </Grid>
        </div>
      </InfiniteScroll>
      <div className="fixed right-10 bottom-10">
        <AddButton />
      </div>
    </>
  );
}
