import { Chat } from './Chat';
import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { MessagesList } from './MessagesList';

interface ChatReaderProps{
    chat:Chat
}

export function ChatReader({ chat }:ChatReaderProps) {
  const { messages } = chat;
  return (
    <>
      <ChatHeader chat={chat} />
      <div className="flex flex-1 flex-col overflow-hidden">
        {!!messages && <MessagesList messages={messages} />}
      </div>
      <MessageInput chat={chat} />
    </>
  );
}
