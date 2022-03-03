import { useEffect, useRef } from 'react';
import { Message } from './Message';
import { MessageItem } from './MessageItem';

interface MessagesListProps{
    messages:Message[]
}

export function MessagesList({ messages }:MessagesListProps) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const element = ref.current as Element;
      element.scrollTo(0, element.scrollHeight);
    }
  }, [messages.length]);

  return (
    <div
      ref={ref as any}
      className="overflow-y-auto flex-1"
    >
      <div
        className="flex flex-col-reverse justify-end p-2"
      >
        {messages.map((item) => <MessageItem message={item} key={item.id} />)}
      </div>
    </div>
  );
}
