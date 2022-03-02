import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { api } from '../api/api';

export function MessageInput({ chatId }:{chatId:number}) {
  const [text, setText] = useState<string>();

  async function sendMessage() {
    const res = await api.post('chat', { text, chatId });
    console.log(res.data);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
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
