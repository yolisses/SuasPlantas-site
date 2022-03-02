/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/image';
import { Chat } from './Chat';
import { useChats } from './ChatsContext';
import { someImage } from '../mock/someImage';

interface ChatButtonProps{
  chat:Chat
}

export function ChatItem({ chat }:ChatButtonProps) {
  const { setChat } = useChats();
  const imageSize = 60;

  function handleClick() {
    setChat(chat);
  }

  return (

    <button
      onClick={handleClick}
      className="highlight flex flex-row items-center gap-2 p-2 w-full rounded-md"
    >
      <Image
        src={chat.image}
        objectFit="cover"
        width={imageSize}
        height={imageSize}
        className="rounded-full"
      />
      <div className="text-left">
        <div>
          { chat.name}
        </div>
        <div className="text-gray-500">
          { chat.lastText}
        </div>
      </div>
    </button>
  );
}
