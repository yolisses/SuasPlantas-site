import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import { Chat } from './Chat';

export function ChatHeader({ chat }:{chat:Chat}) {
  const imageSize = 40;
  return (
    <div className="title-header">
      <Link href="/chat">
        <button className="icon-button lg:hidden">
          <FaChevronLeft />
        </button>
      </Link>
      <Image
        className="rounded-full"
        objectFit="cover"
        src={chat.image}
        width={imageSize}
        height={imageSize}
      />
      <Link href={`/users/${chat.userId}`}>
        <div className="hover:underline cursor-pointer">{chat.name}</div>
      </Link>
    </div>

  );
}
