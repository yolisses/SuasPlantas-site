import { FaChevronDown } from 'react-icons/fa';
import { generateArray } from '../dev/utils/generateArray';

const mockUsers = generateArray(30).map(() => ({
  name: 'Muhammad Lee',
  city: 'Serra Grande',
  state: 'PB',
}));

export function NewHomePage() {
  return (
    <div className="p-2">
      <div className="pb-6">
        <div>Filtrar por</div>
        <div className="flex flex-row gap-2 px-4">
          <button disabled className="w-full disabled:bg-transparent disabled:text-gray-400">Cidade</button>
          <button className="w-full ring-1">
            Estado
            <FaChevronDown size={16} />
          </button>
        </div>
      </div>
      <div className="pb-2">26 pessoas</div>
      <div className="grid grid-cols-2 gap-2">
        {mockUsers.map((user) => (
          <button className="text-black flex flex-col gap-0 items-center bg-gray-100 p-2 rounded-lg">
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
    </div>

  );
}
