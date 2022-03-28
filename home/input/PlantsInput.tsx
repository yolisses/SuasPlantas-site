import Image from 'next/image';
import { FaImage, FaScroll, FaStickyNote } from 'react-icons/fa';
import { useState } from 'react';
import { useUser } from '../../auth/userContext';
import { userImageSVG } from '../../images/user';
import { useSize } from '../../common/SizeContext';
import { ImagesInput } from '../../images/ImagesInput';
import { UserPlantsReminder } from './UserPlantsReminder';

export function PlantsInput() {
  const imageSize = 30;
  const { user } = useUser();
  const [showImages, setShowImages] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  function handleImagesClick() {
    setShowImages((value) => !value);
  }

  function handleDescriptionClick() {
    setShowDescription((value) => !value);
  }

  const { md } = useSize();

  let firstName;
  if (user) { firstName = ` ${user.name.split(' ')[0]}`; }

  return (
    <div className="p-2 rounded-xl bg-gray-100 w-full">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg center-row gap-2">
            <Image
              objectFit="cover"
              width={imageSize}
              height={imageSize}
              className="rounded-full"
              src={user?.image || userImageSVG}
            />
            Quais plantas você tem,
            {' '}
            {firstName}
            ?
          </div>
          <div className="gap-2 center-row">
            <div className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                className="placeholder-gray-500 bg-white p-3 rounded-lg"
                placeholder="Nome da planta"
              />
              {showDescription && (
              <textarea
                rows={3}
                className="placeholder-gray-500 bg-white p-3 rounded-lg"
                placeholder="Descrição"
              />
              )}
              {showImages && (
              <ImagesInput onChange={() => {}} />
              )}
              <div className="center-row">
                <button className="icon-button" onClick={handleImagesClick}>
                  <FaImage size={20} color="#080" />
                </button>
                <button className="icon-button" onClick={handleDescriptionClick}>
                  <FaStickyNote size={20} color="#080" />
                </button>
                <input type="submit" value="Adicionar" className="main-button max-w-sm ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
