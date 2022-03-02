import Image from 'next/image';
import Link from 'next/link';
import { Chat } from './Chat';

export function ChatHeader({ chat }:{chat:Chat}) {
  const imageSize = 40;
  return (
    <div className="shadow flex flex-row items-start">
      <Link href={`/users/${chat.userId}`}>
        <div className="flex flex-row p-2 gap-2 items-center hover:underline cursor-pointer">
          <Image
            className="rounded-full"
            objectFit="cover"
            src={chat.image}
            width={imageSize}
            height={imageSize}
          />
          <div>{chat.name}</div>
        </div>
      </Link>
    </div>

  );
}
