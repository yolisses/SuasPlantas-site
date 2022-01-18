import Image from 'next/image';
import Link from 'next/link';
import { User } from './User';
import { userImage } from '../images/user';

interface UserLinkProps {
  user: User;
  imgSize?: number;
}

export function UserLink({ user, imgSize = 50 }: UserLinkProps) {
  return (
    <Link href={`/users/${user.id}`}>
      <a>
        <div className="flex items-start">
          <div className="secondary-button ">
            <Image
              alt={user.name}
              width={imgSize}
              height={imgSize}
              objectFit="cover"
              src={user.image || userImage}
              className="rounded-full bg-gray-300"
            />
            <div className="flex flex-col">
              <div className="font-semibold text-black">{user.name}</div>
              <div className="text-gray-700 text-sm">
                {/* Entrou no SuasPlantas em
            {' '}
            <time>{new Date(user.createdAt).getFullYear()}</time> */}
                {user.city}
                ,
                {' '}
                {user.state}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
