import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { api } from '../api/api';
import { Plant } from '../plant/Plant';
import { AddButton } from './AddButton';
import { GridItem } from '../common/GridItem';
import { filterStore } from '../search/filtersStore';
import { WithoutResultsWarn } from './WithoutResultsWarn';

interface HomePageProps {
  data: any;
}

export const HomePage = observer(({ data }: HomePageProps) => {
  const [items, setItems] = useState(data?.content || []);
  const [pageData, setPageData] = useState(data?.pageData || {});
  const [loading, setLoading] = useState(false);

  async function fetchItems() {
    setLoading(true);
    const res = await api.get('plants', {
      params: {
        page: pageData.nextPage,
        ...filterStore.query,
      },
    });
    setPageData(res.data.pageData);
    setItems((items:Plant[]) => items.concat(res.data.content));
    setLoading(false);
  }

  function refresh() {
    setItems([]);
    setPageData({ });
    fetchItems();
  }

  useEffect(() => { if (filterStore.query)refresh(); }, [filterStore.query]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />
      </Head>
      {/* {JSON.stringify(filterStore.query)} */}
      {/* <TopTabs tab="plants" /> */}
      <InfiniteScroll
        next={fetchItems}
        dataLength={items.length}
        hasMore={!!pageData.nextPage}
        scrollThreshold={0.8}
        loader={(<div />)}
      >
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-5 xl:px-20">
          {items.map((item: Plant) => (
            <GridItem key={item.id} item={item} size={300} />
          ))}
        </div>
      </InfiniteScroll>
      {!!(
        !loading
          && !items.length
          && filterStore.query
          && Object.keys(filterStore.query).length)
      && (
      <div className="flex flex-col items-center pt-20">
        <WithoutResultsWarn />
      </div>
      )}
      { loading && (
      <div className="flex flex-col items-center pt-20 pb-10">
        <CircularProgress />
      </div>
      )}
      <div className="fixed right-10 bottom-10">
        <AddButton />
      </div>
    </>
  );
});
