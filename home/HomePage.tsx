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
import { LocationFilterInput } from './LocationFilterInput';
import { ItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';
import { PlantsInput } from './PlantsInput';

interface HomePageProps<T>{
  tab:TopTab
  tourSteps?:Step[]
  tourName?:TourName
  additionalItems?:T[]
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
  additionalItems,
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
        className="title-header px-0 text-base flex flex-row justify-center md:justify-start"
      >
        <TopTabs tab={tab} />
      </div>
      <div className="flex flex-col p-2 gap-2">
        <PlantsInput />
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
        <div id="tour_add_button" className="fixed right-6 bottom-16 md:right-10 md:bottom-10">
          {firstActionButton}
        </div>
        <div
          className="fixed bottom-0 center-col md:items-start w-full"
        >
          <div id="tour_start" />
        </div>
      </div>
      {!!tourSteps && (<Tour steps={tourSteps} tourName={tourName} />)}
    </>
  );
}
