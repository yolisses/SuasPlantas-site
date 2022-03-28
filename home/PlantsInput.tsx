import Image from 'next/image';
import { useUser } from '../auth/userContext';
import { userImageSVG } from '../images/user';

export function PlantsInput() {
  const { user } = useUser();
  const imageSize = 70;
  return (
    <div className="p-2 rounded-xl bg-gray-200">
      <div className="text-lg">Quais plantas você tem?</div>
      <div className="rounded-lg p-2 gap-2 center-row">
        <Image
          objectFit="cover"
          width={imageSize}
          height={imageSize}
          className="rounded-full"
          src={user?.image || userImageSVG}
        />
        <div>
          <input type="text" />
        </div>
        {/* {JSON.stringify(user?.plants)} */}
      </div>
    </div>

  );
}
