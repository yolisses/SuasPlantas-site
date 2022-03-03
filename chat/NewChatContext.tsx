import { createContext, ReactNode, useState } from 'react';
import { useRefresh } from '../utils/useRefresh';

interface Message{
    id: number,
    text: string,
    senderId: number,
    receiverId: number,
    createdAt:string,
}

interface Chat{
    name:string
    image:string
    userId:number
    text:string|null
    messages:Message[]
}

interface ChatGroup{
    [key:number]:Chat
}

interface ChatsContext{
    chats:ChatGroup
}

const chatsContext = createContext({ } as ChatsContext);

export function ChatsContextProvider({ children }:{children:ReactNode}) {
  const [chats, setChats] = useState<ChatGroup>({});
  const refresh = useRefresh();

  function addChat(chat:Chat) {
    chats[chat.userId] = chat;
    refresh();
  }

  function addMessage(userId:number, message:Message) {
    chats[userId].messages.push(message);
    refresh();
  }

  return (
    <chatsContext.Provider value={{}}>
      {children}
    </chatsContext.Provider>
  );
}
