import { useEffect } from 'react';
import { Chat } from './Chat';
import { useChats } from './ChatsContext';
import { ChatHeader } from './ChatHeader';
import { useUser } from '../auth/UserContext';
import { MessageInput } from './MessageInput';
import { MessagesList } from './MessagesList';

interface ChatReaderProps{
    chat:Chat
}

export function ChatReader({ chat }:ChatReaderProps) {
  const { messages, pendingMessages } = chat;
  const { getMessages } = useChats();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getMessages(chat);
    }
  }, [chat, user]);

  return (
    <>
      <ChatHeader chat={chat} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <MessagesList messages={pendingMessages.concat(messages)} />
      </div>
      <MessageInput chat={chat} />
    </>
  );
}
