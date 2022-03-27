import { useRouter } from 'next/router';
import { useChats } from './ChatsContext';
import { ChatReader } from './ChatReader';
import { ContactsPage } from './ContactsPage';
import { useSize } from '../common/SizeContext';

export function ChatPage() {
  const { lg } = useSize();
  const { chats } = useChats();
  const { id } = useRouter().query;

  const chat = chats[id as string];

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <div className="flex flex-col w-full">
        {chat ? (<ChatReader chat={chat} />) : (
          <div className="flex-1 flex items-center justify-center text-slate-600">
            Selecione ou comece uma conversa
          </div>
        )}
      </div>
      {lg && (
      <div className="w-full max-w-sm overflow-y-auto shadow bg-white">
        <ContactsPage current={chat} />
      </div>
      )}
    </div>
  );
}
