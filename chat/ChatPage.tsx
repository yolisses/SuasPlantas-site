import { ChatHeader } from './ChatHeader';
import { ContactList } from './ContactList';
import { MessagesList } from './MessagesList';

export function ChatPage() {
  return (
    <div className="flex flex-row flex-1 h-screen-no-header">
      <div className="max-w-md w-full p-2 flex flex-col gap-2 shadow-md">
        <div className="text-lg">Conversas</div>
        <ContactList />
      </div>
      <div className="flex-1">
        <ChatHeader />
        <div className="flex-1 flex flex-col gap-1 p-4">
          <MessagesList />
        </div>
      </div>
    </div>
  );
}
