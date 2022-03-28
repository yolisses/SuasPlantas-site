import Image from 'next/image';
import { useUser } from '../auth/userContext';
import { userImageSVG } from '../images/user';

export function PlantsInput() {
  const { user } = useUser();
  const imageSize = 60;
  return (
    <div className="p-4 rounded-xl bg-gray-200">
      <div className="text-lg">Quais plantas você tem?</div>
      <div className="gap-2 center-row">
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
