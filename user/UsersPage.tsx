import { HomePage } from '../home/HomePage';
import { usersContext } from './usersContext';
import { UserItem } from './UserItem';
import { User } from './User';
import { useUser } from '../auth/userContext';

export function UsersPage() {
  const { user } = useUser();

  return (
    <HomePage
      context={usersContext}
      tab="users"
    >
      {(items) => (
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-5 xl:px-20">
          {!!items && items.filter((item:User) => item.id !== user.id).map((item: User) => (
            <UserItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
