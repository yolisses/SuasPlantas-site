import Image from 'next/image';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaHandSparkles, FaRegThumbsUp } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import { someImage } from '../mock/someImage';

interface NotificationExampleItem{
    image:string
    marked?:boolean
    children:ReactNode
    Icon:IconType
}

function NotificationExampleItem({
  image, marked, children, Icon,
}:NotificationExampleItem) {
  const imageSize = 150;
  return (
    <div className="flex flex-row items-center w-72 bg-gray-200 rounded-r-lg gap-2 pr-2">
      <div className="aspect-square h-16 relative">

        <Image
          src={image}
          width={imageSize}
          objectFit="cover"
          height={imageSize}
          className="rounded-lg"
        />
        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
          <Icon color="#080" size={20} />
        </div>

      </div>
      <div className="whitespace-normal text-left text-sm">
        {children}
      </div>
      {marked
      && (
      <div>
        <div className="bg-green-500 h-3 w-3 rounded-full" />
      </div>
      )}
    </div>
  );
}

export function NotificationsExample() {
  return (
    <div className="my-6 flex flex-col-reverse mr-4">
      <div className="transform scale-[80%] -rotate-3 shadow-lg translate-x-9">
        <NotificationExampleItem
          image="/landing/thumb4.jpg"
          Icon={FaRegThumbsUp}
        >
          <strong>Bianca</strong>
          {' '}
          curtiu sua planta
          {' '}
          <strong>monstera variegata</strong>
        </NotificationExampleItem>

      </div>
      <div className="transform rotate-6 shadow-lg">
        <NotificationExampleItem
          image="/landing/thumb2.jpg"
          marked
          Icon={HiOutlineSparkles}
        >

          Nova planta que você pode estar procurando:
          {' '}
          <strong>
            Rosa do deserto
          </strong>
        </NotificationExampleItem>
      </div>

    </div>

  );
}
