import Image from 'next/image';
import { FaImage } from 'react-icons/fa';
import { useState } from 'react';
import { useUser } from '../../auth/userContext';
import { userImageSVG } from '../../images/user';
import { useSize } from '../../common/SizeContext';
import { ImagesInput } from '../../images/ImagesInput';

export function PlantsInput() {
  const imageSize = 60;
  const { md } = useSize();
  const { user } = useUser();
  const [showImages, setShowImages] = useState(false);

  function handleImagesClick() {
    setShowImages((value) => !value);
  }

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
            <div className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                className="placeholder-gray-500 bg-white p-3 rounded-lg"
                placeholder="Nome da planta"
              />
              {showImages && <ImagesInput onChange={() => {}} />}
              <div className="center-row gap-2">
                <button className="icon-button" onClick={handleImagesClick}>
                  <FaImage size={20} color="#080" />
                </button>
                <input type="submit" value="Adicionar" className="main-button max-w-sm" />
              </div>
            </div>
          </div>
        </div>
        {/* {md && <UserPlantsReminder />} */}
      </div>
    </div>

  );
}
