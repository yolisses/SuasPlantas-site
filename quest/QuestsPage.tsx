import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../common/Spinner';
import { TopTabs } from '../common/TopTabs';
import { SearchField } from '../search/SearchField';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';
import { AddButton } from '../home/AddButton';
import { useQuests } from './questsContext';
import { Quest } from './Quest';
import { QuestItem } from './QuestItem';

export function QuestsPage() {
  const {
    items,
    loading,
    filters,
    pageData,
    loadMore,
    setFilters,
  } = useQuests();

  return (
    <>
      <div className=" flex flex-col md:flex-row p-2 md:pl-0 items-center justify-between">
        <TopTabs tab="quests" />
        <SearchField filters={filters} setFilters={setFilters} path="/quests" />
      </div>
      <InfiniteScroll
        next={loadMore}
        dataLength={items?.length || 0}
        hasMore={!!pageData?.nextPage}
        scrollThreshold={0.8}
        loader={(<div />)}
      >
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-5 xl:px-20">
          {!!items && items.map((item: Quest) => (
            <QuestItem item={item} key={item.id} />
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
        <AddButton url="quests/edit" />
      </div>
    </>
  );
}
