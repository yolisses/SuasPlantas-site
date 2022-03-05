import { Chat } from './Chat';
import { ChatItem } from './ChatItem';
import { useChats } from './ChatsContext';

export function ContactsPage() {
  const { chats } = useChats();

  return (
    <div className="p-2">
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
  );
}
