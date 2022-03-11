/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/image';
import Link from 'next/link';
import { Chat } from './Chat';

interface ChatButtonProps{
  chat:Chat
  current?:boolean
}

export function ChatItem({ chat, current }:ChatButtonProps) {
  const imageSize = 60;

  return (
    <Link href={`/chat/${chat.userId}`}>
      <button
        className={`highlight center-row gap-2 p-2 w-full rounded-md ${
          current ? 'bg-gray-100' : ''
        }`}
      >
        <Image
          src={chat.image}
          objectFit="cover"
          width={imageSize}
          height={imageSize}
          className="rounded-full"
        />
        <div className="text-left overflow-hidden flex-1">
          <div className="overflow-hidden truncate">
            { chat.name}
          </div>
          <div className="text-gray-500 overflow-hidden truncate">
            {chat.input
              ? (
                <>
                  <span className="text-white bg-gray-400 rounded-lg p-1">falta enviar</span>
                  {' '}
                  {chat.input}
                </>
              )
              : chat.lastPendingMessage?.text || chat.lastMessage?.text}
          </div>
        </div>
      </button>
    </Link>
  );
}
