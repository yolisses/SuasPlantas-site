import {
  FaThumbsUp,
  FaComments,
  FaCommentAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import { Plant } from '../plant/Plant';
import { Quest } from '../quest/Quest';
import { PostButton } from './PostButton';
import { userImageSVG } from '../images/user';
import { PostShareButton } from './PostShareButton';

interface PostItemProps{
    item:Plant|Quest
}

export function PostItem({ item }:PostItemProps) {
  const {
    name, user, images, card, id,
  } = item;
  const imageSize = 40;

  const cardSize = 500;

  return (
    <div className="flex flex-col gap-2 max-h-screen">
      <div className="center-row gap-1">
        <Image
          width={imageSize}
          objectFit="cover"
          height={imageSize}
          src={user.image || userImageSVG}
          className="bg-gray-300 rounded-full"
        />
        <div>
          <div className="font-semibold">
            {user.name}
          </div>
          <div className="text-sm text-gray-500">
            {' '}
            <FaMapMarkerAlt className="inline pb-0.5" />
            {user.city}
            ,
            {' '}
            {user.state}
          </div>
        </div>
      </div>
      <div className={`bg-gray-100 flex flex-col rounded-xl ${!card ? 'py-6 center' : ''}`}>
        <div className="text-lg p-2">
          {name}
        </div>
        {card && (
          <Image
            src={card}
            width={cardSize}
            height={cardSize}
            objectFit="cover"
            className="bg-gray-100 rounded-lg"
          />
        )}
      </div>
      <div className="center-row gap-4">
        <PostButton Icon={FaCommentAlt} count={3421} />
        <PostButton Icon={FaThumbsUp} count={3421} />
        <PostButton Icon={FaComments} />
        <PostShareButton id={id} />
      </div>
    </div>
  );
}
