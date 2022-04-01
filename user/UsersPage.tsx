import Image from 'next/image';

import { User } from './User';
import { UserItem } from './UserItem';
import { userImage } from '../images/user';
import { HomePage } from '../home/HomePage';
import { usersContext } from './usersContext';
import { useUser } from '../auth/UserContext';
import { useIsLogged } from '../auth/useIsLogged';

export function UsersPage() {
  const imageSize = 80;
  const { user } = useUser();
  const { isLogged } = useIsLogged();

  return (
    <HomePage context={usersContext}>
      {(items) => (
        <div className="p-2 grid gap-2 grid-cols-2 md:grid-cols-5">
          {!user
          && (
          <button
            className="bg-gray-100 center-col p-2 rounded-lg hover:bg-gray-300 gap-0 text-black"
            onClick={(e) => {
              if (!isLogged()) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <Image
              src={userImage}
              objectFit="cover"
              width={imageSize}
              height={imageSize}
              className="rounded-full"
            />
            <div className="text-lg pt-2">
              Criar um perfil
            </div>
            <div>
              Sua cidade e estado
            </div>
            <strong className="text-sm">É totalmente grátis</strong>
          </button>
          )}
          {!!items && items
            // .filter((item:User) => item.id !== user.id)
            .map((item: User) => (
              <UserItem key={item.id} item={item} />
            ))}
        </div>
      )}
    </HomePage>
  );
}
