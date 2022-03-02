import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { Chat } from './Chat';

interface ChatsContext{
  chats?:Chat[]
  chat?:Chat
  loading:boolean
  setChat: Dispatch<SetStateAction<Chat>>
}

export const chatsContext = createContext({} as ChatsContext);

export function ChatsProvider({ children }:{children:ReactNode}) {
  const [chat, setChat] = useState<Chat>();
  const [chats, setChats] = useState<Chat[]>();
  const [loading, setLoading] = useState(false);

  async function getChats() {
    setLoading(true);
    try {
      const res = await api.get('chat/contacts');
      const chats = res.data;
      setChats(chats);
      if (!chat)setChat(chats[0]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    getChats();
  }, []);

  return (
    <chatsContext.Provider value={{
      chat, chats, loading, setChat,
    }}
    >
      {children}
    </chatsContext.Provider>
  );
}

export function useChats() {
  return useContext(chatsContext);
}
