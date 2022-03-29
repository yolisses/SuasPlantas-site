import Image from 'next/image';
import Link from 'next/link';
import { userImage } from '../images/user';
import { Quest } from './Quest';

export function QuestItem({ item }:{item:Quest}) {
  const imageSize = 30;
  const user = item?.user;
  return (
    <Link href={`users/${user?.id}`}>
      <button className="center-col p-2 rounded-lg shadow gap-2 bg-gray-100 highlight">
        <div className="text-lg">{item.name}</div>
        {!!user && (
          <div className="flex flex-row gap-2 items-center">
            <div className="flex-shrink-0">
              <Image
                objectFit="cover"
                width={imageSize}
                height={imageSize}
                layout="intrinsic"
                src={user.image || userImage}
                className="rounded-full shrink-0"
              />
            </div>
            <div className="flex-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
              <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                {user.name}
              </div>
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {user.city}
                ,
                {' '}
                {user.state}
              </div>
            </div>
          </div>
        )}
      </button>
    </Link>
  );
}
