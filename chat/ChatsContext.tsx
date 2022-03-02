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
  const [chats, setChats] = useState<Chat[]>();
  const [chat, setChat] = useState<Chat>();
  const [loading, setLoading] = useState(false);

  async function getChats() {
    setLoading(true);
    try {
      const res = await api.get('chat/contacts');
      console.log(res.data);
      setChats(res.data);
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
