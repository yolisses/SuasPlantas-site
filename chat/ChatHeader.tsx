import Image from 'next/image';
import { Chat } from './Chat';
import { someImage } from '../mock/someImage';

export function ChatHeader({ chat }:{chat:Chat}) {
  const imageSize = 40;
  return (
    <div className="flex flex-row p-2 gap-2 shadow items-center">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={someImage}
        width={imageSize}
        height={imageSize}
      />
      <div>
        {chat.name}
      </div>
    </div>
  );
}
