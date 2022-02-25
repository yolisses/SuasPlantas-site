import {
  Context,
  ReactNode,
  useContext,
} from 'react';
import { Step } from 'react-joyride';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaChevronDown, FaLocationArrow, FaMapMarker, FaMapMarkerAlt, FaMapPin,
} from 'react-icons/fa';
import { Spinner } from '../common/Spinner';
import { SearchField } from '../search/SearchField';
import { TopTab, TopTabs } from '../common/TopTabs';
import { IItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';
import { TourName, useTour } from '../tour/TourContext';
import { Tour } from '../tour/Tour';
import { LocationField } from '../location/LocationField';

interface HomePageProps<T>{
  tab:TopTab
  tourSteps?:Step[]
  tourName?:TourName
  aditionalItems?:T[]
  firstActionButton:ReactNode
  children:(items?:T[])=>ReactNode
  context:Context<IItemsContext<T>>
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
          <LocationField text="Cajazeiras, Paraíba" />
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
      <div className="flex flex-col items-center pt-20 pb-10">
        <Spinner />
      </div>
      )}
      { (!loading && !!items && !items?.length) && (
      <div className="flex flex-col items-center pt-20">
        <WithoutResultsWarn />
      </div>
      )}
      <div id="tour_add_button" className="fixed right-10 bottom-10">
        {firstActionButton}
      </div>
      <div
        className="fixed bottom-0 flex flex-col items-center md:items-start w-full"
      >
        <div id="tour_start" />
      </div>
      {!!tourSteps && (<Tour steps={tourSteps} tourName={tourName} />)}
    </>
  );
}
