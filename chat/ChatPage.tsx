import { useRouter } from 'next/router';
import { useSize } from '../size/SizeContext';
import { Chat } from './Chat';
import { ChatItem } from './ChatItem';
import { ChatReader } from './ChatReader';
import { useChats } from './ChatsContext';

export function ChatPage() {
  const { lg } = useSize();
  const { chats } = useChats();
  const { id } = useRouter().query;

  const chat = chats[id as string];
  const values = Object.values(chats);

  return (

    <div className="h-screen-no-header flex flex-row overflow-hidden">
      {lg && (
      <div className="w-full max-w-md overflow-y-auto shadow p-2 bg-white">
        <div className="mb-2 text-lg">Conversas</div>
        {values.length
          ? values.map((item:Chat) => <ChatItem chat={item} />)
          : (
            <div className="pt-6 flex-1 flex items-center justify-center text-slate-600">
              Sem conversas por enquanto
            </div>
          )}
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
