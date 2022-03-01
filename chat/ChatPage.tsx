import { FaPaperPlane } from 'react-icons/fa';
import { ChatHeader } from './ChatHeader';
import { ContactList } from './ContactList';
import { MessagesList } from './MessagesList';

export function ChatPage() {
  return (
    <div className="flex flex-row flex-1 h-screen-no-header">
      <div className="max-w-md w-full p-2 flex flex-col shadow-md">
        <div className="text-lg">Conversas</div>
        <ContactList />
      </div>
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <div className="flex-1 flex flex-col p-4">
          <MessagesList />
        </div>
        <div className="bg-gray-100 w-full p-3 flex flex-row gap-2">
          <input type="text" placeholder="Escrever mensagem" className="p-2 rounded-full shadow-md px-3" />
          <button type="submit" className="icon-button">
            <FaPaperPlane size={23} color="#444" />
          </button>
        </div>
      </div>
    </div>
  );
}
