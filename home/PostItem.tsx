import {
  FaShare,
  FaThumbsUp,
  FaComments,
  FaCommentAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { Plant } from '../plant/Plant';
import { Quest } from '../quest/Quest';
import { PostButton } from './PostButton';
import { userImageSVG } from '../images/user';
import { ShareButtons } from '../common/ShareButtons';

interface PostItemProps{
    item:Plant|Quest
}

export function PostItem({ item }:PostItemProps) {
  const {
    name, user, images, card, id,
  } = item;
  const imageSize = 40;

  const cardSize = 500;

  const [share, setShare] = useState(false);

  function handleShareButton() {
    setShare((value) => !value);
  }

  return (
    <div className="flex flex-col gap-2 max-h-screen bg-red-300">
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
        <div className="relative">
          {share && (
            <div className="bg-white center-row gap-1 p-2 rounded-xl shadow-lg absolute right-0 -top-10">
              <ShareButtons
                socialIconProps={{ size: 36, borderRadius: 100 }}
                shareUrl={`https://suasplantas.com/plants/${id}`}
              />
            </div>
          )}
          <PostButton
            Icon={FaShare}
            selected={share}
            onClick={handleShareButton}
          />
        </div>
      </div>
    </div>
  );
}
