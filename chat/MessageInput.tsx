import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface MessageInputProps{
  onSubmit:(text:string)=>void
}

export function MessageInput({ onSubmit }:MessageInputProps) {
  const [text, setText] = useState<string>();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text) {
          onSubmit(text);
          setText(undefined);
        }
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
