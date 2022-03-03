import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { useRefresh } from '../utils/useRefresh';
import { Chat } from './Chat';

interface ChatsGroup{
  [key:string]:Chat
}

interface ChatsContext{
  chats:ChatsGroup
  currentChat?:Chat
  setCurrentChat:Dispatch<SetStateAction<Chat|undefined>>
  addChat:(chat:Chat)=>void
}

export const chatsContext = createContext({} as ChatsContext);

export function ChatsContextProvider({ children }:{children:ReactNode}) {
  const [chats, setChats] = useState({} as ChatsGroup);
  const [currentChat, setCurrentChat] = useState<Chat>();
  const refresh = useRefresh();

  function addChat(chat:Chat) {
    chats[chat.userId] = chat;
    refresh();
  }

  return (
    <chatsContext.Provider value={{
      chats, addChat, currentChat, setCurrentChat,
    }}
    >
      {children}
    </chatsContext.Provider>
  );
}

export function useChats() {
  return useContext(chatsContext);
}
