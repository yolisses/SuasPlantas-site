import Image from 'next/image';
import Link from 'next/link';
import { someImage } from '../mock/someImage';

export function MeButton() {
  const size = 36;
  return (
    <Link href="/users/me">
      <Image
        width={size}
        height={size}
        src={someImage}
        className="bg-gray-300 rounded-full shadow-md cursor-pointer"
      />
    </Link>
  );
}
