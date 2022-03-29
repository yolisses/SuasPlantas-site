import {
  Context,
  ReactNode,
  useContext,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Spinner } from '../common/Spinner';
import { SearchField } from '../search/SearchField';
import { TopTab, TopTabs } from '../common/TopTabs';
import { LocationFilterInput } from './LocationFilterInput';
import { ItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';

interface HomePageProps<T>{
  tab:TopTab
  additionalItems?:T[]
  topChildren?:ReactNode
  children:(items?:T[])=>ReactNode
  context:Context<ItemsContext<T>>
}

export function HomePage<T>({
  tab,
  context,
  children,
  topChildren,
  additionalItems,
}:HomePageProps<T>) {
  const {
    items,
    pageData,
    loading,
    loadMore,
  } = useContext(context);

  return (
    <>
      <div className="title-header px-0 text-base flex flex-row justify-center md:justify-start">
        <TopTabs tab={tab} />
      </div>
      <div className="flex flex-col px-2 py-4 gap-4">
        {topChildren}
        <section className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
            <div className="max-w-md w-full">
              <SearchField />
            </div>
            <LocationFilterInput />
          </div>
          <InfiniteScroll
            next={loadMore}
            dataLength={items?.length || 0}
            hasMore={!!pageData?.nextPage}
            scrollThreshold={0.8}
            loader={(<div />)}
          >
            {children(additionalItems ? additionalItems.concat(items || []) : items)}
          </InfiniteScroll>
          { loading && (
          <div className="center-col pt-20 pb-10">
            <Spinner />
          </div>
          )}
          { (!loading && !!items && !items?.length) && (
          <div className="center-col pt-20">
            <WithoutResultsWarn />
          </div>
          )}
        </section>
      </div>
    </>
  );
}
