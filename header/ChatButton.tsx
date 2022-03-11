import Link from 'next/link';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useChats } from '../chat/ChatsContext';
import { useSize } from '../common/SizeContext';

export function ChatButton() {
  const { lg } = useSize();
  const { chats } = useChats();

  const href = lg ? (`/chat/${Object.keys(chats)[0]}`) : '/chat';
  return (
    <Link href={href}>
      <button className="icon-button">
        <FaRegCommentAlt color="#fff" size={25} />
      </button>
    </Link>
  );
}
