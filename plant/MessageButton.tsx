import Link from 'next/link';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useChats } from '../chat/ChatsContext';

interface MessageButtonProps{
    userId:number
}

export function MessageButton({ userId }:MessageButtonProps) {
  const { chats, setCurrentChat } = useChats();

  function handleClick() {
    const chat = chats[userId];
    if (chat) setCurrentChat(chat);
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
