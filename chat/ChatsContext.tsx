import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
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
      setChats(
        [
          {
            id: 2,
            userId: 3,
            name: 'user 3',
            image: 'image 3',
            lastText: '3 -> 1',
            lastUserId: 3,
            lastTime: Date.now().toString(),
          },
          {
            id: 1,
            userId: 2,
            name: 'user 2',
            image: 'image 2',
            lastText: '2 -> 1',
            lastUserId: 2,
            lastTime: Date.now().toString(),
          },
        ],
      );
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    getChats();
  });

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
