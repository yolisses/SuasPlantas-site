import {
  Context,
  ReactNode,
  useContext,
} from 'react';
import { Step } from 'react-joyride';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Tour } from '../tour/Tour';
import { Spinner } from '../common/Spinner';
import { TourName } from '../tour/TourContext';
import { SearchField } from '../search/SearchField';
import { TopTab, TopTabs } from '../common/TopTabs';
import { ItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';
import { LocationFilterInput } from './LocationFilterInput';
import { Footer } from '../footer/Footer';

interface HomePageProps<T>{
  tab:TopTab
  tourSteps?:Step[]
  tourName?:TourName
  aditionalItems?:T[]
  firstActionButton:ReactNode
  children:(items?:T[])=>ReactNode
  context:Context<ItemsContext<T>>
}

export function HomePage<T>({
  tab,
  context,
  children,
  tourName,
  tourSteps,
  aditionalItems,
  firstActionButton,
}:HomePageProps<T>) {
  const {
    items,
    pageData,
    loading,
    loadMore,
  } = useContext(context);

  return (
    <>
      <div
        className=" flex flex-col md:flex-row-reverse items-center justify-between"
      >
        <div className="flex flex-row justify-center flex-1">
          <LocationFilterInput />
        </div>
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
        {children(aditionalItems ? aditionalItems.concat(items || []) : items)}
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
      <div id="tour_add_button" className="fixed right-6 bottom-16">
        {firstActionButton}
      </div>
      <div
        className="fixed bottom-0 center-col md:items-start w-full"
      >
        <div id="tour_start" />
      </div>
      {!!tourSteps && (<Tour steps={tourSteps} tourName={tourName} />)}
      <Footer selected="home" />
    </>
  );
}
