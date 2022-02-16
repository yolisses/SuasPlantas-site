import { useEffect, useState } from 'react';
import { useModal } from '../modal/ModalContext';
import { ShareButton } from '../user/ShareButton';
import { brazilianStates } from '../location/brazilianStates';
import { UserModal } from './UserModal';
import { useFusers } from '../fusers/fusersContext';
import { Fuser } from '../fusers/Fuser';

export function NewHomePage() {
  const none = 'none';
  const [cities, setCities] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const { setModal } = useModal();
  const {
    items, setFilters, filters, reset,
  } = useFusers();

  async function getCities(state:string) {
    setCities(undefined);
    const { cities } = await brazilianStates[state].cities;
    console.log(cities);
    setCities(cities);
  }

  function changeState(state:string) {
    setCity(undefined);
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
    setCity(city);
    setFilters({ state, city });
    reset();
  }

  function discardNone(value:string) {
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
            onChange={(e) => changeState(discardNone(e.target.value))}
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
            onChange={(e) => changeCity(discardNone(e.target.value))}
          >
            <option value={none}>qualquer cidade</option>
            {
              Object.entries(cities).map(([id, { name }]) => <option value={id}>{name}</option>)
            }
          </select>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 md:px-10 gap-2">
        {!!items && items.map((user:Fuser) => (
          <button
            onClick={() => setModal(<UserModal fuser={user} />)}
            className="text-black flex flex-col gap-0 items-center bg-gray-100 shadow p-3 rounded-lg"
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

      <div className="fixed right-10 bottom-10">
        <ShareButton />
      </div>
    </div>

  );
}
