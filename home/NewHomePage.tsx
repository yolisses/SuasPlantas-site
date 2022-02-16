import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { generateArray } from '../dev/utils/generateArray';
import { useModal } from '../modal/ModalContext';
import { ShareButton } from '../user/ShareButton';
import { brazilianStates } from './brazilianStates';
import { UserModal } from './UserModal';

const mockUsers = generateArray(30).map(() => ({
  name: 'Muhammad Lee',
  city: 'Serra Grande',
  state: 'PB',
}));

export function NewHomePage() {
  const none = 'none';
  const [cities, setCities] = useState();
  const [city, setCity] = useState(none);
  const [state, setState] = useState(none);
  const { setModal } = useModal();

  async function getCities(state:string) {
    setCities(undefined);
    const { cities } = await import(`./cities/${state}.TS`);
    setCities(cities);
  }

  useEffect(() => {
    if (state !== none) {
      getCities(state);
    } else {
      setCities(undefined);
    }
  }, [state]);

  return (
    <div className="p-2">
      <div className="pb-6 flex flex-col gap-2">
        <div>Filtrar por</div>
        <div className="flex flex-row gap-2 px-4 w-full max-w-md">
          <select className="w-full p-2 rounded-lg" onChange={(e) => setState(e.target.value)}>
            <option value={none}>qualquer estado</option>
            {
              Object.entries(brazilianStates).map(([id, { name }]) => <option value={id}>{name}</option>)
            }
          </select>
          {!!cities
          && (
          <select className="w-full p-2 rounded-lg" onChange={(e) => setCity(e.target.value)}>
            <option value={none}>qualquer cidade</option>
            {
              Object.entries(cities).map(([id, { name }]) => <option value={id}>{name}</option>)
            }
          </select>
          )}
        </div>
      </div>
      <div className="pb-2">26 pessoas</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 md:px-10 gap-2">
        {mockUsers.map((user) => (
          <button
            onClick={() => setModal(<UserModal user={user} />)}
            className="text-black flex flex-col gap-0 items-center bg-gray-100 shadow p-2 rounded-lg"
          >
            <div>
              {user.name}
            </div>
            <div>
              {user.city}
              {' '}
              -
              {' '}
              {user.state}
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
