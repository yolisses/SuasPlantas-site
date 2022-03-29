import Image from 'next/image';
import Link from 'next/link';
import { userImage } from '../images/user';
import { Quest } from './Quest';

export function QuestItem({ item }:{item:Quest}) {
  const user = item?.user;
  return (
    <Link href={`users/${user?.id}`}>
      <a tabIndex={-1}>
        <button className="center p-2 w-full rounded-lg text-black bg-gray-200 hover:bg-gray-300 text-center shadow-md flex flex-col gap-2 highlight">
          <div className="text-lg">
            {item.name}
            {' '}
          </div>
          {!!user && (
          <div className="flex flex-row gap-2 items-center">
            <Image
              width={30}
              height={30}
              objectFit="cover"
              layout="intrinsic"
              src={user.image || userImage}
              className="rounded-full flex-nowrap shrink-0"
            />
            <div className="flex-1 overflow-hidden text-sm">
              <div className="text-left font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                {user.name}
              </div>
              <div className="text-left overflow-hidden text-ellipsis whitespace-nowrap">
                {user.city}
                ,
                {' '}
                {user.state}
              </div>
            </div>
          </div>
          )}
        </button>
      </a>
    </Link>
  );
}
