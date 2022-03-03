/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/image';
import { Chat } from './Chat';
import { useChats } from './ChatsContext';

interface ChatButtonProps{
  chat:Chat
}

export function ChatItem({ chat }:ChatButtonProps) {
  const imageSize = 60;

  const { setCurrentChat, currentChat } = useChats();

  function handleClick() {
    setCurrentChat(chat);
  }

  return (
    <button
      onClick={handleClick}
      className={`highlight flex flex-row items-center gap-2 p-2 w-full rounded-md ${
        chat.userId === currentChat?.userId ? 'bg-gray-100' : ''
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
          {!!chat.input && <span className="text-white bg-gray-500 rounded-lg p-1">falta enviar</span> }
          {' '}
          {chat.lastMessage?.text}
        </div>
      </div>
    </button>
  );
}
