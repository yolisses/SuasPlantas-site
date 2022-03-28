import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import { useUser } from '../auth/userContext';
import { userImageSVG } from '../images/user';

export function PlantsInput() {
  const { user } = useUser();
  const imageSize = 60;
  const maxPlants = 20;
  return (
    <div className="p-2 rounded-xl bg-gray-100">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <div className="text-lg">Quais plantas você tem?</div>
          <div className="gap-2 center-row">
            <Image
              objectFit="cover"
              width={imageSize}
              height={imageSize}
              className="rounded-full"
              src={user?.image || userImageSVG}
            />
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap h-fit gap-1 overflow-hidden">
          {user?.plants.slice(0, maxPlants).map((plant) => (
            <button className="hover:bg-gray-300 p-2 leading-none rounded-full bg-gray-200 overflow-hidden text-ellipsis whitespace-nowrap max-w-xs">
              {plant.name}
            </button>
          ))}
          {user && user.plants.length > maxPlants && (
          <button className="hover:bg-gray-300 p-2 leading-none rounded-full bg-gray-200">
            +
            {user.plants.length - maxPlants}
            {' '}
            outras
          </button>
          )}
        </div>
      </div>
    </div>

  );
}
