import Link from 'next/link';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useChats } from './ChatsContext';
import { User } from '../user/User';

interface MessageButtonProps{
    user:User
}

export function MessageButton({ user }:MessageButtonProps) {
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
      <button className="main-button" onClick={handleClick}>
        <FaRegCommentAlt />
        Mandar mensagem
      </button>
    </Link>
  );
}
