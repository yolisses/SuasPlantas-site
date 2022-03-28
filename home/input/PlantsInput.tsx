import Image from 'next/image';
import { useUser } from '../../auth/userContext';
import { userImageSVG } from '../../images/user';
import { useSize } from '../../common/SizeContext';
import { UserPlantsReminder } from './UserPlantsReminder';

export function PlantsInput() {
  const imageSize = 60;
  const { md } = useSize();
  const { user } = useUser();

  return (
    <div className="p-2 rounded-xl bg-gray-100">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg">Quais plantas você tem?</div>
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
            <input type="text" className="flex-1" />
          </div>
        </div>
        {md && <UserPlantsReminder />}
      </div>
    </div>

  );
}
