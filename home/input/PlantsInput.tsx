import Image from 'next/image';
import { useUser } from '../../auth/userContext';
import { userImageSVG } from '../../images/user';
import { useSize } from '../../common/SizeContext';
import { UserPlantsReminder } from './UserPlantsReminder';

export function PlantsInput() {
  const imageSize = 60;
  const { md } = useSize();
  const { user } = useUser();

  let firstName;
  if (user) { firstName = ` ${user.name.split(' ')[0]}`; }

  return (
    <div className="p-2 rounded-xl bg-gray-100">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg">
            Quais plantas você tem
            {' '}
            {firstName}
            ?
          </div>
          <div className="gap-2 center-row">
            <div>
              <Image
                objectFit="cover"
                width={imageSize}
                height={imageSize}
                className="rounded-full"
                src={user?.image || userImageSVG}
              />
            </div>
            <form className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                className="flex-1 placeholder-gray-500 bg-white p-3 rounded-xl"
                placeholder="Nome da planta"
              />
              <input type="submit" value="Adicionar" className="main-button max-w-sm" />
            </form>
          </div>
        </div>
        {md && <UserPlantsReminder />}
      </div>
    </div>

  );
}
