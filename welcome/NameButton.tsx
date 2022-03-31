import { MouseEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
import { white } from '../common/colors';

interface NameButtonProps{
    text:string
    remove:(value:string)=>void
}

export function NameButton({ text, remove }:NameButtonProps) {
  function handleRemoveClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    remove(text);
  }

  return (
    <span
      style={{ animation: 'rollout 0.05s' }}
      className="bg-gray-300 pl-2 rounded-full h-8 center-row overflow-hidden"
    >
      <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
        {text}
      </span>
      <button
        onClick={handleRemoveClick}
        className="icon-button p-2"
      >
        <FaTimes color={white} size={16} />
      </button>
    </span>
  );
}
