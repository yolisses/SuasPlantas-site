import { useState, useEffect, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import { Chat } from './Chat';
import { useChats } from './ChatsContext';
import { useUser } from '../auth/userContext';

interface MessageInputProps{
  chat:Chat
}

export function MessageInput({ chat }:MessageInputProps) {
  const [text, setText] = useState<string>(chat.input);
  const { user } = useUser();
  const { userId } = chat;

  const { addMessageOnChat } = useChats();

  function sendMessage(text:string) {
    addMessageOnChat(userId, {
      text,
      id: Math.random(),
      receiverId: userId,
      senderId: user!.id,
      createdAt: Date.now().toString(),
    });
  }

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    if (text.trim()) {
      chat.input = '';
      sendMessage(text);
      setText('');
    }
  }

  useEffect(() => { setText(chat.input); }, [chat]);

  useEffect(() => {
    chat.input = text;
  }, [text]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 w-full p-3 flex flex-row gap-2"
    >
      <input
        type="text"
        value={text || ''}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escrever mensagem"
        className="p-2 rounded-full shadow-md px-3"
      />
      <button type="submit" className="icon-button">
        <FaPaperPlane size={23} color="#444" />
      </button>
    </form>
  );
}
