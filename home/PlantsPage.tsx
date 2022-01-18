import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Plant } from '../plant/Plant';
import { AddButton } from './AddButton';
import { useItems } from './ItemsContext';
import { GridItem } from '../common/GridItem';
import { WithoutResultsWarn } from './WithoutResultsWarn';
import { Spinner } from '../common/Spinner';
import { isDev } from '../utils/isDev';
import { TopTabs } from '../common/TopTabs';
import { SearchField } from '../search/SearchField';

export const PlantsPage = observer(() => {
  const {
    items,
    pageData,
    loading,
    loadMore,
  } = useItems();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />
      </Head>
      {isDev && (
      <div className="md:pl-2 flex flex-col-reverse md:flex-row items-center justify-between">
        <SearchField />
        <TopTabs tab="plants" />
      </div>
      )}
      <InfiniteScroll
        next={loadMore}
        dataLength={items?.length || 0}
        hasMore={!!pageData?.nextPage}
        scrollThreshold={0.8}
        loader={(<div />)}
      >
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-5 xl:px-20">
          {!!items && items.map((item: Plant) => (
            <GridItem key={item.id} item={item} size={300} />
          ))}
        </div>
      </InfiniteScroll>
      { loading && (
      <div className="flex flex-col items-center pt-20 pb-10">
        <Spinner />
      </div>
      )}
      { (!loading && !!items && !items?.length) && (
      <div className="flex flex-col items-center pt-20">
        <WithoutResultsWarn />
      </div>
      )}
      <div className="fixed right-10 bottom-10">
        <AddButton />
      </div>
    </>
  );
});
