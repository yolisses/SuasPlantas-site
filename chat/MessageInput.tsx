import { FaPaperPlane } from 'react-icons/fa';

export function MessageInput() {
  return (
    <div className="bg-gray-100 w-full p-3 flex flex-row gap-2">
      <input type="text" placeholder="Escrever mensagem" className="p-2 rounded-full shadow-md px-3" />
      <button type="submit" className="icon-button">
        <FaPaperPlane size={23} color="#444" />
      </button>
    </div>
  );
}
