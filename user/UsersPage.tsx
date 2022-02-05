import Image from 'next/image';
import { HomePage } from '../home/HomePage';
import { usersContext } from './usersContext';
import { UserItem } from './UserItem';
import { User } from './User';
import { usePreview } from '../preview/PreviewContext';
import { userImage } from '../images/user';
import { useIsLogged } from '../auth/useIsLogged';
import { useUser } from '../auth/userContext';

export function UsersPage() {
  const size = 80;

  const { user: previewUser } = usePreview();
  const { user } = useUser();
  const { isLogged } = useIsLogged();

  return (
    <HomePage
      context={usersContext}
      tab="users"
      aditionalItems={previewUser && [previewUser]}
    >
      {(items) => (
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-5 xl:px-20">
          {!user
          && (
          <button
            className="bg-gray-100 flex flex-col items-center p-2 rounded-lg hover:bg-gray-300 gap-0 text-black"
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
              width={size}
              height={size}
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
            // .filter((item:User) => item.id !== user?.id)
            .map((item: User) => (
              <UserItem key={item.id} item={item} />
            ))}
        </div>
      )}
    </HomePage>
  );
}
