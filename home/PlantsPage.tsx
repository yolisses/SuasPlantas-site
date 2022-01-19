import InfiniteScroll from 'react-infinite-scroll-component';

import { Plant } from '../plant/Plant';
import { AddButton } from './AddButton';
import { Spinner } from '../common/Spinner';
import { TopTabs } from '../common/TopTabs';
import { GridItem } from '../common/GridItem';
import { usePlants } from '../plant/plantsContext';
import { SearchField } from '../search/SearchField';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';

export function PlantsPage() {
  const {
    items,
    pageData,
    loading,
    loadMore,
    filters,
    setFilters,
  } = usePlants();

  return (
    <>
      <div className=" flex flex-col md:flex-row p-2 md:pl-0 items-center justify-between">
        <TopTabs tab="plants" />
        <SearchField filters={filters} setFilters={setFilters} path="/" />
      </div>
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
        <AddButton url="plants/add" />
      </div>
    </>
  );
}
