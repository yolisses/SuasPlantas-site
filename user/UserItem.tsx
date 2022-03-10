import Image from 'next/image';
import Link from 'next/link';
import { User } from './User';
import { userImage } from '../images/user';
import { PreviewIndicator } from '../preview/PreviewIndicator';

interface UserItemProps{
    item:User
    size?:number
}

export function UserItem({ item, size = 80 }:UserItemProps) {
  return (
    <Link href={`/users/${item.id}`}>
      <a className="bg-gray-100 center-col p-2 rounded-lg hover:bg-gray-300">
        <Image
          src={item.image || userImage}
          objectFit="cover"
          width={size}
          height={size}
          className="rounded-full"
        />
        <div className="text-lg pt-2">
          {item.name}
          {' '}
          {item.preview && <PreviewIndicator />}
        </div>
        <div>
          {item.city}
          ,
          {' '}
          {item.state}
        </div>
      </a>
    </Link>
  );
}
