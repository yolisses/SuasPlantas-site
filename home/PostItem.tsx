import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useUser } from '../auth/UserContext';
import { userImageSVG } from '../images/user';
import { PostLikeButton } from './PostLikeButton';
import { PostShareButton } from './PostShareButton';
import { PostMessageButton } from './PostMessageButton';
import { Plant } from '../plant/Plant';

interface PostItemProps{
    item:Plant
}

export function PostItem({ item }:PostItemProps) {
  const {
    id,
    card,
    user,
    name,
  } = item;
  const cardSize = 500;
  const imageSize = 40;
  const { user: currentUser } = useUser();
  const selfUser = currentUser?.id === user.id;

  return (
    <div className="flex flex-col gap-1 max-h-screen">
      <div className="center-row gap-1">
        <Image
          width={imageSize}
          objectFit="cover"
          height={imageSize}
          src={user.image || userImageSVG}
          className="bg-gray-300 rounded-full"
        />
        <div>
          <Link href={`users/${user.id}`}>
            <a className="font-semibold hover:underline">
              {user.name}
            </a>
          </Link>
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
      <div className="center-row gap-2">
        <PostLikeButton id={id} />
        {!selfUser && <PostMessageButton user={user} />}
        <PostShareButton id={id} />
      </div>
    </div>
  );
}
