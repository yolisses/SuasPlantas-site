import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { green500 } from '../common/colors';

export function LocationExample() {
  const imageSize = 1000;

  return (
    <div className="center relative px-3">
      <div className="transform -rotate-6 shadow-xl aspect-square h-36 lg:h-56">
        <Image
          src="/landing/map.png"
          height={imageSize}
          width={imageSize}
          objectFit="cover"
        />
      </div>
      <div className="absolute blur-md aspect-square h-8 bg-green-500" />
      <FaMapMarkerAlt className="absolute mb-10" color={green500} size={40} />
    </div>
  );
}
