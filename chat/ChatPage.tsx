import { FaPaperPlane } from 'react-icons/fa';
import { ChatItem } from './ChatItem';
import { ChatHeader } from './ChatHeader';
import { useChats } from './ChatsContext';
import { MessagesList } from './MessagesList';
import { generateArray } from '../dev/utils/generateArray';
import { MessageInput } from './MessageInput';

const items = generateArray(100);

export function ChatPage() {
  const { chat, chats } = useChats();
  return (
    <div className="h-screen-no-header flex flex-row overflow-hidden">
      <div className="w-full max-w-md overflow-y-auto shadow-lg p-2">
        <div className="mb-2 text-lg">Conversas</div>
        {!!chats && chats.map((item) => <ChatItem chat={item} />)}
      </div>
      <div className="flex flex-col w-full">
        {!!chat && (
          <ChatHeader chat={chat} />
        )}
        <div className="overflow-y-auto flex-1 flex flex-col p-2">
          <MessagesList />
        </div>
        <MessageInput />
      </div>
    </div>

  );
}
