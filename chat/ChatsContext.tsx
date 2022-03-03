import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { UserId } from '../user/User';
import { useRefresh } from '../utils/useRefresh';
import { Chat } from './Chat';
import { Message } from './Message';

interface ChatsGroup{
  [key:string]:Chat
}

interface ChatsContext{
  chats:ChatsGroup
  currentChat?:Chat
  setCurrentChat:Dispatch<SetStateAction<Chat|undefined>>
  addChat:(chat:Chat)=>Chat
  addMessageOnChat:(userId:UserId, message:Message)=>void
}

export const chatsContext = createContext({} as ChatsContext);

export function ChatsContextProvider({ children }:{children:ReactNode}) {
  const [chats, setChats] = useState({} as ChatsGroup);
  const [currentChat, setCurrentChat] = useState<Chat>();
  const refresh = useRefresh();

  function addChat(chat:Chat) {
    chats[chat.userId] = chat;
    refresh();
    return chat;
  }

  function addMessageOnChat(userId:UserId, message:Message) {
    const chat = chats[userId];
    chat.messages.unshift(message);
    chat.lastMessage = message;
    refresh();
  }

  return (
    <chatsContext.Provider value={{
      chats, addChat, currentChat, setCurrentChat, addMessageOnChat,
    }}
    >
      {children}
    </chatsContext.Provider>
  );
}

export function useChats() {
  return useContext(chatsContext);
}
