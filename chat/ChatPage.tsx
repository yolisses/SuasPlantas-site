import {
  useState,
  useEffect,
} from 'react';
import { api } from '../api/api';
import { Message } from './Message';
import { ChatItem } from './ChatItem';
import { ChatHeader } from './ChatHeader';
import { useChats } from './ChatsContext';
import { MessageInput } from './MessageInput';
import { useUser } from '../auth/userContext';
import { MessagesList } from './MessagesList';

export function ChatPage() {
  const { user } = useUser();
  const { chat, chats } = useChats();
  const [messages, setMessages] = useState<Message[]>();

  async function sendMessage(text:string) {
    setMessages((old) => [{
      text,
      chatId: chat!.id,
      id: Math.random(),
      senderId: user!.id,
      createdAt: Date.now().toString(),
    }, ...old]);
    await api.post('chat', { text, chatId: chat.id });
  }

  async function getMessages(chatId:number) {
    const res = await api.get(`chat/${chatId}`);
    setMessages(res.data.content);
  }

  useEffect(() => {
    if (chat) {
      getMessages(chat.id);
    }
  }, [chat]);

  return (
    <div className="h-screen-no-header flex flex-row overflow-hidden">
      <div className="hidden lg:inline-block w-full max-w-md overflow-y-auto shadow p-2 bg-white">
        <div className="mb-2 text-lg">Conversas</div>
        {!!chats && chats.map((item) => <ChatItem chat={item} />)}
      </div>
      <div className="flex flex-col w-full">
        {chat ? (
          <>
            <ChatHeader chat={chat} />
            <div className="flex flex-1 flex-col overflow-hidden">
              {!!messages && <MessagesList messages={messages} />}
            </div>
            <MessageInput onSubmit={sendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-600">
            Selecione ou comece uma conversa
          </div>
        )}
      </div>
    </div>

  );
}
