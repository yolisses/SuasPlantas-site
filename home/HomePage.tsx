import {
  Context,
  ReactNode,
  useContext,
} from 'react';
import { Step } from 'react-joyride';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Tour } from '../tour/Tour';
import { TourBottom } from './TourBottom';
import { Spinner } from '../common/Spinner';
import { TourName } from '../tour/TourContext';
import { useSize } from '../common/SizeContext';
import { PlantsInput } from './input/PlantsInput';
import { SearchField } from '../search/SearchField';
import { TopTab, TopTabs } from '../common/TopTabs';
import { LocationFilterInput } from './LocationFilterInput';
import { ItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';
import { UserPlantsReminder } from './input/UserPlantsReminder';

interface HomePageProps<T>{
  tab:TopTab
  tourSteps?:Step[]
  tourName?:TourName
  additionalItems?:T[]
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
}:HomePageProps<T>) {
  const {
    items,
    pageData,
    loading,
    loadMore,
  } = useContext(context);
  const { md } = useSize();

  return (
    <>
      <div className="title-header px-0 text-base flex flex-row justify-center md:justify-start">
        <TopTabs tab={tab} />
      </div>
      <div className="flex flex-col p-2 pt-4 gap-4">
        <section className="flex flex-row gap-4">
          <PlantsInput />
          {md && <UserPlantsReminder />}
        </section>
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
        <TourBottom />
      </div>
      {!!tourSteps && (<Tour steps={tourSteps} tourName={tourName} />)}
    </>
  );
}
