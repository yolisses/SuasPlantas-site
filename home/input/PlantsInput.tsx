import Image from 'next/image';
import { useUser } from '../../auth/userContext';
import { useSize } from '../../common/SizeContext';
import { userImageSVG } from '../../images/user';
import { Chip } from './Chip';

export function PlantsInput() {
  const imageSize = 60;
  const maxPlants = 10;
  const { md } = useSize();
  const { user } = useUser();

  return (
    <div className="p-2 rounded-xl bg-gray-100">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg">Quais plantas você tem?</div>
          <div className="gap-2 center-row">
            <div>
              <Image
                objectFit="cover"
                width={imageSize}
                height={imageSize}
                className="rounded-full"
                src={user?.image || userImageSVG}
              />
            </div>
            <input type="text" className="flex-1" />
          </div>
        </div>
        {md && (
        <div className="flex-1 flex flex-row flex-wrap h-fit gap-1 overflow-hidden max-w-md">
          {user?.plants.slice(0, maxPlants).map(({ name, card }) => (
            <Chip text={name} image={card} />
          ))}
          {user && user.plants.length > maxPlants && (
          <Chip text={`+${user.plants.length - maxPlants} outras`} />
          )}
        </div>
        )}
      </div>
    </div>

  );
}
