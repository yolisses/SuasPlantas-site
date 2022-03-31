import { useState, useEffect, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import { Chat } from './Chat';
import { useChats } from './ChatsContext';
import { gray600 } from '../common/colors';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';
import { getAuthToken } from '../api/getAuthToken';
import { useSocket } from '../socket/SocketContext';

interface MessageInputProps{
  chat:Chat
}

export function MessageInput({ chat }:MessageInputProps) {
  const { userId } = chat;
  const { user } = useUser();
  const { socket } = useSocket();
  const { isLogged } = useIsLogged();
  const { addMessageOnChat } = useChats();
  const [text, setText] = useState<string>(chat.input);

  function sendMessage(text:string) {
    addMessageOnChat(userId, {
      text,
      id: Math.random(),
      receiverId: userId,
      senderId: user!.id,
      createdAt: (new Date()).toDateString(),
    });
    const token = getAuthToken();
    socket.emit('send_message', token, { text, userId });
  }

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    if (!isLogged()) return;
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
        data-hj-allow
        value={text || ''}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escrever mensagem"
        className="p-2 rounded-full shadow-md px-3"
      />
      <button type="submit" className="icon-button">
        <FaPaperPlane size={23} color={gray600} />
      </button>
    </form>
  );
}
