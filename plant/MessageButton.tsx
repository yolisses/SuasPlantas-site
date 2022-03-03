import { FaRegCommentAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useChats } from '../chat/ChatsContext';

interface MessageButtonProps{
    chatId?:number
    userId?:number
}

export function MessageButton({ chatId, userId }:MessageButtonProps) {
  const { setChat, chats } = useChats();

  function handleClick() {
    const chat = chats?.filter((chat) => {
      if (chatId && chat.id === chatId) return true;
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
