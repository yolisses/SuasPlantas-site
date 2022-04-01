import Image from 'next/image';
import { Plant } from '../plant/Plant';
import { Quest } from '../quest/Quest';

interface PostItemProps{
    item:Plant|Quest
}

export function PostItem({ item }:PostItemProps) {
  const { name, user } = item;
  const imageSize = 20;

  return (
    <div className="highlight p-2 rounded-lg">
      <div className="center-row gap-1">
        <Image
          src={user.image}
          width={imageSize}
          height={imageSize}
          className="bg-gray-300 rounded-full"
        />
        {user.name}
      </div>
      {' '}
      adicionou a planta
      {' '}
      {name}
    </div>
  );
}
