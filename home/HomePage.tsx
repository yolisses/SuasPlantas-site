import { Context, ReactNode, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AddButton } from './AddButton';
import { Spinner } from '../common/Spinner';
import { TopTab, TopTabs } from '../common/TopTabs';
import { IItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';
import { SearchField } from '../search/SearchField';

interface HomePageProps<T>{
    context:Context<IItemsContext<T>>
    tab:TopTab
    children:(items?:T[])=>ReactNode
    fabPath?:string
}

export function HomePage<T>({
  context, tab, children, fabPath,
}:HomePageProps<T>) {
  const {
    items,
    pageData,
    loading,
    loadMore,
  } = useContext(context);

  return (
    <>
      <div className=" flex flex-col md:flex-row items-center justify-between">
        <TopTabs tab={tab} />
      </div>
      <div className="md:hidden">
        <SearchField resetButtonColor="gray" />
      </div>
      <InfiniteScroll
        next={loadMore}
        dataLength={items?.length || 0}
        hasMore={!!pageData?.nextPage}
        scrollThreshold={0.8}
        loader={(<div />)}
      >
        {children(items)}
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
      {!!fabPath && (
      <div className="fixed right-10 bottom-10">
        <AddButton url={fabPath} />
      </div>
      )}
    </>
  );
}
