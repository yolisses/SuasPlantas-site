import { FacebookButton } from '../contact/FacebookButton';
import { Fuser } from '../fusers/Fuser';

export function UserModal({ fuser }:{fuser:Fuser}) {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="text-xl">
        {fuser.name}
      </div>
      <div className="text-lg">
        {fuser.city.name}
        {' '}
        -
        {' '}
        {fuser.city.stateId}
      </div>
      <div className="px-40" />
      <FacebookButton facebookId={fuser.id} />
    </div>
  );
}