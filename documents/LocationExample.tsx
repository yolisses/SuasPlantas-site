import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

export function LocationExample() {
  const imageSize = 1000;

  return (
    <div className="center relative px-3">
      <div className="transform -rotate-6 my-4 shadow-lg aspect-square h-60">
        <Image
          src="/landing/map.png"
          height={imageSize}
          width={imageSize}
          objectFit="cover"
        />
      </div>
      <div className="absolute blur-md aspect-square h-8 bg-green-500" />
      <FaMapMarkerAlt className="absolute mb-10" color="#080" size={40} />
    </div>
  );
}
