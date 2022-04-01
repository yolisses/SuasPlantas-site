import Link from 'next/link';
import { FaComments } from 'react-icons/fa';

import { User } from '../user/User';
import { useChats } from '../chat/ChatsContext';

interface MessageButtonProps{
    user:User
}

export function PostMessageButton({ user }:MessageButtonProps) {
  const { chats, addChat } = useChats();

  function handleClick() {
    let chat = chats[user.id];
    if (!chat) {
      const { name, id, image } = user;
      chat = addChat({
        userId: id, name, image, messages: [], pendingMessages: [], input: '',
      });
    }
  }

  return (
    <Link href={`/chat/${user.id}`}>
      <button
        className="icon-button text-gray-400 active:text-green-500"
        onClick={handleClick}
      >
        <FaComments size={20} />
      </button>
    </Link>
  );
}
