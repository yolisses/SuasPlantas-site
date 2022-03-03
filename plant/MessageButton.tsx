import Link from 'next/link';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useChats } from '../chat/ChatsContext';
import { User } from '../user/User';

interface MessageButtonProps{
    user:User
}

export function MessageButton({ user }:MessageButtonProps) {
  const { chats, setCurrentChat, addChat } = useChats();

  function handleClick() {
    let chat = chats[user.id];
    if (!chat) {
      const { name, id, image } = user;
      chat = addChat({
        userId: id, name, image, messages: [], input: '',
      });
    }
    setCurrentChat(chat);
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
