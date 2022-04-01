import Image from 'next/image';
import {
  FaCommentAlt, FaComments, FaMapMarkerAlt, FaShare, FaThumbsUp,
} from 'react-icons/fa';
import { userImageSVG } from '../images/user';
import { Plant } from '../plant/Plant';
import { Quest } from '../quest/Quest';
import { PostButton } from './PostButton';

interface PostItemProps{
    item:Plant|Quest
}

export function PostItem({ item }:PostItemProps) {
  const { name, user } = item;
  const imageSize = 40;

  return (
    <div className="flex flex-row highlight hover:bg-gray-100 p-2 gap-2 rounded-xl">
      <div className="flex-shrink-0">
        <Image
          width={imageSize}
          objectFit="cover"
          height={imageSize}
          src={user.image || userImageSVG}
          className="bg-gray-300 rounded-full"
        />
      </div>
      <div>
        <div className="leading-6">
          <span className="font-semibold">
            {user.name}
          </span>
          {' '}
          <span className="text-sm text-gray-500">
            {' '}
            <FaMapMarkerAlt className="inline pb-0.5" />
            {user.city}
            ,
            {' '}
            {user.state}
          </span>
        </div>
        <div className="flex flex-row items-start">
          adicionou a planta
          <span className="text-lg p-4 py-6">
            {name}
          </span>
        </div>
        <div className="center-row gap-4">
          <PostButton Icon={FaCommentAlt} count={3421} />
          <PostButton Icon={FaThumbsUp} count={3421} />
          <PostButton Icon={FaComments} />
          <PostButton Icon={FaShare} />
        </div>
      </div>
      <div />
    </div>
  );
}
