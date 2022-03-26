import { ReactNode } from 'react';
import { mainColor } from './mainColor';

interface TabSelectorProps{
  id?:string
  tab?:string
  value?:string
  children:ReactNode,
  setTab?:(tab:string)=>void
}

export function TabSelector({
  children, value, tab, setTab, id,
}:TabSelectorProps) {
  function handleClick() {
    if (setTab && value) { setTab(value); }
  }

  const selected = tab === value;
  return (
    <button
      id={id}
      onClick={handleClick}
      className={`secondary-button center-row h-11 px-2 sm:px-4 justify-center gap-1 ${
        selected
          ? 'text-green-600 border-green-600 border-b-2 rounded-b-none'
          : 'text-gray-500'
      }`}
    >
      {children}
    </button>
  );
}
