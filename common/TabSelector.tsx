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
      className="flex flex-row items-center h-11 px-4 justify-center gap-1"
      style={selected ? {
        color: mainColor,
        borderColor: mainColor,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      } : {
        color: 'gray',
      }}
    >
      {children}
    </button>
  );
}
