import Link from 'next/link';
import { FaCommentAlt, FaRegCommentAlt } from 'react-icons/fa';

export function ChatButton() {
  return (
    <Link href="/chat">
      <button className="icon-button">
        <FaRegCommentAlt color="#fff" size={25} />
      </button>
    </Link>
  );
}
