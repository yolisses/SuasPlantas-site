import {
  Context,
  ReactNode,
  useContext,
} from 'react';
import ReactJoyride, { Step } from 'react-joyride';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AddButton } from './AddButton';
import { Spinner } from '../common/Spinner';
import { mainColor } from '../common/mainColor';
import { SearchField } from '../search/SearchField';
import { TopTab, TopTabs } from '../common/TopTabs';
import { IItemsContext } from '../pagination/PaginationProvider';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';

interface HomePageProps<T>{
  tab:TopTab
  fabPath?:string
  tourSteps?:Step[]
  children:(items?:T[])=>ReactNode
  context:Context<IItemsContext<T>>
}

export function HomePage<T>({
  tab,
  fabPath,
  context,
  children,
  tourSteps,
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
        className=" flex flex-col md:flex-row items-center justify-between"
      >
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
      <div id="tour_add_button" className="fixed right-10 bottom-10">
        <AddButton url={fabPath} />
      </div>
      )}
      <div
        className="fixed bottom-0 flex flex-col items-center md:items-start w-full"
      >
        <div id="tour_start" />
      </div>
      {!!tourSteps && (
      <ReactJoyride
        steps={tourSteps}
        continuous
        disableScrolling
        styles={{
          tooltipFooter: {
            marginTop: 0,
          },
          tooltip: {
            boxShadow: '0 0 30px #0001',
          },
          buttonNext: {
            padding: '0.75rem',
            backgroundColor: mainColor,
          },
          buttonBack: {
            padding: '0.75rem',
            color: mainColor,
          },
          buttonClose: {
            padding: '0.75rem',
          },
          buttonSkip: {
            padding: '0.75rem',
            color: mainColor,
          },
        }}
        locale={{
          back: 'Voltar',
          next: 'Próximo',
          last: 'Entendi',
          close: 'Fechar',
        }}
      />
      )}
    </>
  );
}
