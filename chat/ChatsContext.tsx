import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';

interface Chat{
  id: number,
  userId: number,
  name: string,
  image: string,
  lastText: string|null,
  lastUserId: number,
  lastTime:string,
}

interface ChatsContext{
  chats?:Chat[]
  loading:boolean
}

export const chatsContext = createContext({} as ChatsContext);

export function ChatsProvider({ children }:{children:ReactNode}) {
  const [chats, setChats] = useState<Chat[]>();
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
    <chatsContext.Provider value={{ chats, loading }}>
      {children}
    </chatsContext.Provider>
  );
}

export function useChats() {
  return useContext(chatsContext);
}
