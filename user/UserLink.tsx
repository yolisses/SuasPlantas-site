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
      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <Image
          width={imgSize}
          height={imgSize}
          src={user.image || userImage}
          alt={user.name}
          className="rounded-full bg-gray-300"
        />
        <div className="flex flex-col">
          <div className="font-semibold hover:underline">{user.name}</div>
          <div className="text-gray-500 text-sm">
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
    </Link>
  );
}
