import { FacebookButton } from '../contact/FacebookButton';

export function UserModal({ user }:{user:any}) {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="text-xl">
        {user.name}
      </div>
      <div className="text-lg">
        {user.city}
        {' '}
        -
        {' '}
        {user.state}
      </div>
      <div className="px-40" />
      <FacebookButton />
    </div>
  );
}
