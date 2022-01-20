import { HomePage } from '../home/HomePage';
import { usersContext } from './usersContext';
import { UserItem } from './UserItem';
import { User } from './User';

export function UsersPage() {
  return (
    <HomePage
      context={usersContext}
      tab="users"
    >
      {(items) => (
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-5 xl:px-20">
          {!!items && items.map((item: User) => (
            <UserItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
