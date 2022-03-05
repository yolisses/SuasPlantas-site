import { useEffect } from 'react';
import { Chat } from './Chat';
import { ChatHeader } from './ChatHeader';
import { useChats } from './ChatsContext';
import { MessageInput } from './MessageInput';
import { MessagesList } from './MessagesList';

interface ChatReaderProps{
    chat:Chat
}

export function ChatReader({ chat }:ChatReaderProps) {
  const { messages, pendingMessages } = chat;
  const { getMessages } = useChats();

  useEffect(() => {
    getMessages(chat);
  }, [chat]);

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
