import { FaTimes } from 'react-icons/fa';

interface NameButtonProps{
    text:string
    remove:(value:string)=>void
}

export function NameButton({ text, remove }:NameButtonProps) {
  function handleRemoveClick() {
    remove(text);
  }

  return (
    <span
      style={{ animation: 'rollout 0.05s' }}
      className="bg-gray-300 pl-1 rounded-full h-8 center"
    >
      {text}
      <button
        onClick={handleRemoveClick}
        className="icon-button p-2"
      >
        <FaTimes color="white" size={16} />
      </button>
    </span>
  );
}
