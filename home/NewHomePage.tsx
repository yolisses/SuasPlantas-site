import Link from 'next/link';
import { useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Fuser } from '../fusers/Fuser';
import { UserModal } from './UserModal';
import { Spinner } from '../common/Spinner';
import { useModal } from '../modal/ModalContext';
import { Cities } from '../location/cities/Cities';
import { interact } from '../interactions/interact';
import { useFusers } from '../fusers/fusersContext';
import { brazilianStates } from '../location/brazilianStates';

export function NewHomePage() {
  const none = 'none';
  const [cities, setCities] = useState<Cities>();
  const [state, setState] = useState<string>();
  const { setModal } = useModal();
  const {
    items,
    reset,
    loading,
    loadMore,
    pageData,
    setFilters,
  } = useFusers();

  async function getCities(state:string) {
    setCities(undefined);
    const { cities } = await brazilianStates[state as keyof typeof brazilianStates].cities;
    setCities(cities);
  }

  function changeState(state:string) {
    setState(state);
    if (state) {
      getCities(state);
    } else {
      setCities(undefined);
    }
    setFilters({ state });
    reset();
  }

  function changeCity(city:string) {
    setFilters({ state, city });
    reset();
  }

  function discardNone(value:any) {
    if (value === none) return undefined;
    return value;
  }

  return (
    <div className="p-2">
      <div className="pb-6 flex flex-col gap-2">
        <div>Filtrar por</div>
        <div className="flex flex-row gap-2 px-4 w-full max-w-md">
          <select
            className="w-full p-2 rounded-lg"
            onChange={(e) => {
              const { value } = e.target;
              interact({ type: 'set filter', filterType: 'state', value });
              changeState(discardNone(value));
            }}
            defaultValue={state || none}
          >
            <option value={none}>qualquer estado</option>
            {
              Object.entries(brazilianStates).map(([id, { name }]) => (
                <option value={id}>{name}</option>
              ))
            }
          </select>
          {!!cities
          && (
          <select
            className="w-full p-2 rounded-lg"
            onChange={(e) => {
              const { value } = e.target;
              interact({ type: 'set filter', filterType: 'state', value });
              changeCity(discardNone(value));
            }}
          >
            <option value={none}>qualquer cidade</option>
            {
              Object.entries(cities).map(([id, name]) => <option value={id}>{name}</option>)
            }
          </select>
          )}
        </div>
      </div>
      <InfiniteScroll
        next={() => {
          loadMore((pageData) => {
            interact({ type: 'load more', dataType: 'fuser', page: pageData?.page });
          });
        }}
        dataLength={items?.length || 0}
        hasMore={!!pageData?.nextPage}
        scrollThreshold={0.8}
        loader={(<div />)}
      >
        <>
          {!!pageData
          && (
          <div className="px-2 pb-2 text-gray-600">
            {pageData?.totalCount}
            {' '}
            pessoas
          </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 md:px-10 gap-2">
            {!!items && items.map((user:Fuser) => (
              <button
                onClick={() => {
                  interact({ type: 'show fuser', id: user.id });
                  setModal(<UserModal fuser={user} />);
                }}
                className="flex flex-col gap-0 items-center bg-gray-100 shadow p-3 rounded-lg"
              >
                <div className="text-lg">
                  {user.name}
                </div>
                <div className="text-green-800">
                  {user.city?.name}
                  {' '}
                  -
                  {' '}
                  {user.city?.stateId}
                </div>
              </button>
            ))}
          </div>
        </>
      </InfiniteScroll>
      {loading && (
      <div className="p-4 flex-1 flex flex-col items-center justify-center">
        <Spinner />
      </div>
      )}
      <div id="tour_add_button" className="fixed right-10 bottom-10">
        <Link href="/contact">
          <button className="main-button">
            O que achou do site?
            <FaSmile size={20} />
          </button>
        </Link>
      </div>
      <div className="pb-24" />
    </div>

  );
}
