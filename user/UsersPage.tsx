import InfiniteScroll from 'react-infinite-scroll-component';
import { User } from './User';
import { UserItem } from './UserItem';
import { useUsers } from './usersContext';

import { Spinner } from '../common/Spinner';
import { SearchField } from '../search/SearchField';
import { LocationFilterInput } from '../location/LocationFilterInput';
import { WithoutResultsWarn } from '../pagination/WithoutResultsWarn';

export function UsersPage() {
  const {
    items,
    loading,
    loadMore,
    pageData,
  } = useUsers();

  return (
    <div className="flex flex-col p-2 gap-4">
      <section className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
          <div className="max-w-md w-full">
            <SearchField />
          </div>
          <LocationFilterInput />
        </div>
        <InfiniteScroll
          next={loadMore}
          loader={(<div />)}
          scrollThreshold={0.8}
          hasMore={!!pageData?.nextPage}
          dataLength={items?.length || 0}
        >
          <div className="p-2 grid gap-2 grid-cols-2 md:grid-cols-5">
            {!!items && items
              // .filter((item:User) => item.id !== user.id)
              .map((item: User) => (
                <UserItem key={item.id} item={item} />
              ))}
          </div>
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
  );
}
