import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface MessageInputProps{
  userId:number
}

export function MessageInput({ userId }:MessageInputProps) {
  const [text, setText] = useState<string>();

  function submit() {

  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text) {
          submit();
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
