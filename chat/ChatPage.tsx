import { useEffect, useState } from 'react';
import { ChatItem } from './ChatItem';
import { ChatHeader } from './ChatHeader';
import { useChats } from './ChatsContext';
import { MessageInput } from './MessageInput';
import { api } from '../api/api';
import { MessageItem } from './MessageItem';
import { Message } from './Message';

export function ChatPage() {
  const { chat, chats } = useChats();
  const [messages, setMessages] = useState<Message[]>();

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
      <div className="w-full max-w-md overflow-y-auto shadow p-2 bg-white">
        <div className="mb-2 text-lg">Conversas</div>
        {!!chats && chats.map((item) => <ChatItem chat={item} />)}
      </div>
      <div className="flex flex-col w-full">
        {chat ? (
          <>
            <ChatHeader chat={chat} />
            <div className="overflow-y-auto flex-1">
              <div className="flex flex-col-reverse justify-end p-2">
                {!!messages && messages
                  .map((item) => <MessageItem message={item} key={item.id} />)}
              </div>
            </div>
            <MessageInput />
          </>
        ) : (
          <div className="flex-1 bg-slate-200 flex items-center justify-center text-slate-600">
            Selecione ou comece uma conversa
          </div>
        )}
      </div>
    </div>

  );
}
