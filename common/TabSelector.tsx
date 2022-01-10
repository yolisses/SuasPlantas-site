import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface TabSelectorProps{
    children:ReactNode,
    index:number
    tab:number
    setTab:(tab:number)=>void
}

export function TabSelector({
  children, index, tab, setTab,
}:TabSelectorProps) {
  function handleClick() {
    setTab(index);
  }

  const selected = tab !== index;
  return (
    <Button
      className={`flex flex-row items-center h-11 px-8 justify-center gap-1 ${
        selected ? 'text-gray-400 border-b-0' : ''
      }`}
      style={!selected ? {
        borderStyle: 'solid', borderBottomWidth: 2, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
      } : undefined}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
