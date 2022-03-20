import Image from 'next/image';
import Link from 'next/link';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';

export function ProfileThumb() {
  const { user } = useUser();
  const imageSize = 24;
  return (
    <Link href={user ? `/users/${user?.id}` : '/landing'}>
      <Image
        objectFit="cover"
        width={imageSize}
        height={imageSize}
        src={user?.image || userImage}
        className="rounded-full border-white border-2"
      />
    </Link>
  );
}
