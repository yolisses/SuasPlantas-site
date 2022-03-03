import Link from 'next/link';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useChats } from '../chat/ChatsContext';

interface MessageButtonProps{
    userId?:number
}

export function MessageButton({ userId }:MessageButtonProps) {
  const { setChat, chats } = useChats();

  function handleClick() {
    const chat = chats?.filter((chat) => {
      if (userId && chat.userId === userId) return true;
      return false;
    });
    if (chat) setChat(chat[0]);
  }

  return (
    <Link href="/chat">
      <button className="main-button" onClick={handleClick}>
        <FaRegCommentAlt />
        Mandar mensagem
      </button>
    </Link>
  );
}
