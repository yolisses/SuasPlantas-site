import { Chat } from './Chat';
import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { MessagesList } from './MessagesList';

interface ChatReaderProps{
    chat:Chat
}

export function ChatReader({ chat }:ChatReaderProps) {
  const { messages, pendingMessages } = chat;
  return (
    <>
      <ChatHeader chat={chat} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <MessagesList messages={messages.concat(pendingMessages)} />
      </div>
      <MessageInput chat={chat} />
    </>
  );
}
