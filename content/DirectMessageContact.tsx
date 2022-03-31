import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { User } from '../user/User';
import { green700 } from '../common/colors';
import { MessageButton } from '../chat/MessageButton';

export function DirectMessageContact() {
  const [user, setUser] = useState<User>();

  async function getUser() {
    const res = await api.get('users/1');
    setUser(res.data);
  }

  useEffect(() => { getUser(); }, []);

  if (!user) return null;

  const imageSize = 50;

  return (
    <div className="flex flex-col">
      <h2 className="center-row gap-1">
        <FaRegUser color={green700} />
        Ou chame por aqui mesmo
      </h2>
      <div className="center-row gap-2 bg-gray-100 self-start rounded-lg p-2 overflow-x-hidden">
        <Image
          src={user.image}
          width={imageSize}
          height={imageSize}
          objectFit="cover"
          className="bg-gray-100 rounded-full"
        />
        <div className="overflow-hidden whitespace-nowrap">
          <Link href={`/users/${user.id}`}>
            <a className="text-sm md:text-base hover:underline ">{user.name}</a>
          </Link>
          <div className="text-sm text-gray-500">
            {user.city}
            ,
            {' '}
            {user.state}
          </div>
        </div>
        <MessageButton user={user} />
      </div>
    </div>
  );
}
