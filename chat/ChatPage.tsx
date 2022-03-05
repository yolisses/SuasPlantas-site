import { useRouter } from 'next/router';
import { useChats } from './ChatsContext';
import { ChatReader } from './ChatReader';
import { useSize } from '../size/SizeContext';
import { ContactsPage } from './ContactsPage';

export function ChatPage() {
  const { lg } = useSize();
  const { chats } = useChats();
  const { id } = useRouter().query;

  const chat = chats[id as string];

  return (

    <div className="h-screen-no-header flex flex-row overflow-hidden">
      {lg && (
      <div className="w-full max-w-md overflow-y-auto shadow">
        <ContactsPage />
      </div>
      )}
      <div className="flex flex-col w-full">
        {chat ? (<ChatReader chat={chat} />) : (
          <div className="flex-1 flex items-center justify-center text-slate-600">
            Selecione ou comece uma conversa
          </div>
        )}
      </div>
    </div>
  );
}
