import Image from 'next/image';
import Link from 'next/link';
import { userImage } from '../images/user';
import { PreviewIndicator } from '../preview/PreviewIndicator';
import { Quest } from './Quest';

export function QuestItem({ item }:{item:Quest}) {
  const user = item?.user;
  return (
    <Link href={`users/${user?.id}`}>
      <a tabIndex={-1}>
        <button className="w-full rounded-lg text-black bg-gray-200 hover:bg-gray-300 text-center shadow-md flex flex-col gap-2 highlight">
          <div className="text-lg">
            {item.name}
            {' '}
            {item.preview && <PreviewIndicator />}
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
            <div className="flex-1 overflow-x-hidden text-sm">
              <div className="overflow-ellipsis  text-left whitespace-nowrap font-semibold">{user.name}</div>
              <div className="overflow-ellipsis text-left">
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
