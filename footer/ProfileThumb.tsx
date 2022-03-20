import Image from 'next/image';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';

export function ProfileThumb() {
  const { user } = useUser();
  const imageSize = 24;
  return (
    <Image
      objectFit="cover"
      width={imageSize}
      height={imageSize}
      src={user?.image || userImage}
      className="rounded-full border-white border-2"
    />
  );
}
