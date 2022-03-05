import { Chat } from './Chat';
import { ChatItem } from './ChatItem';
import { ChatReader } from './ChatReader';
import { useChats } from './ChatsContext';

export function ChatPage() {
  const { chats, currentChat } = useChats();

  return (
    <div className="h-screen-no-header flex flex-row overflow-hidden">
      <div className="hidden lg:inline-block w-full max-w-md overflow-y-auto shadow p-2 bg-white">
        <div className="mb-2 text-lg">Conversas</div>
        {chats ? Object
          .values(chats)
          .map((item:Chat) => <ChatItem chat={item} />)
          : (
            <div className="flex-1 flex items-center justify-center text-slate-600">
              Sem conversas por enquanto
            </div>
          )}
      </div>
      <div className="flex flex-col w-full">
        {currentChat ? (<ChatReader chat={currentChat} />) : (
          <div className="flex-1 flex items-center justify-center text-slate-600">
            Selecione ou comece uma conversa
          </div>
        )}
      </div>
    </div>
  );
}
