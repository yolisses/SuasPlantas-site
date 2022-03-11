import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { Chat } from './Chat';
import { api } from '../api/api';
import { Message } from './Message';
import { UserId } from '../user/User';
import { useUser } from '../auth/userContext';
import { useRefresh } from '../utils/useRefresh';
import { useSocket } from '../socket/SocketContext';

interface ChatsGroup{
  [key:string]:Chat
}

interface ChatsContext{
  chats:ChatsGroup
  addChat:(chat:Chat)=>Chat
  getMessages:(chat:Chat)=>void
  addMessageOnChat:(userId:UserId, message:Message)=>void
}

export const chatsContext = createContext({} as ChatsContext);

export function ChatsContextProvider({ children }:{children:ReactNode}) {
  const { user } = useUser();
  const refresh = useRefresh();
  const [chats] = useState({} as ChatsGroup);

  async function getChats() {
    const res = await api.get('chat/contacts');
    res.data.forEach((contact:any) => {
      const {
        userId, image, name, text, senderId, receiverId, lastTime,
      } = contact;
      if (!chats[userId]) {
        chats[userId] = {
          name,
          image,
          userId,
          input: '',
          messages: [],
          pendingMessages: [],
          lastMessage: {
            text,
            senderId,
            id: 10000,
            receiverId,
            createdAt: lastTime,
          },
        };
      }
    });
    refresh();
  }

  function addChat(chat:Chat) {
    chats[chat.userId] = chat;
    refresh();
    return chat;
  }

  async function getMessages(chat:Chat) {
    if (chat.messages.length) return;
    const res = await api.get(`chat/${chat.userId}`);
    chat.messages = res.data.content;
    refresh();
  }

  function addMessageOnChat(userId:UserId, message:Message) {
    const chat = chats[userId];
    if (!chat) {
      getChats();
    } else {
      chat.pendingMessages.unshift(message);
      chat.lastPendingMessage = message;
      refresh();
    }
  }

  function reset() {
    for (const key in chats) {
      delete chats[key];
    }
    refresh();
  }

  useEffect(() => {
    if (user) {
      getChats();
    } else {
      reset();
    }
  }, [user]);

  const { socket } = useSocket();

  useEffect(() => {
    socket.on('receive_message', (message:Message) => {
      addMessageOnChat(message.senderId, message);
    });
  }, []);

  return (
    <chatsContext.Provider value={{
      chats,
      addChat,
      getMessages,
      addMessageOnChat,
    }}
    >
      {children}
    </chatsContext.Provider>
  );
}

export function useChats() {
  return useContext(chatsContext);
}
