import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface TabSelectorProps{
    children:ReactNode,
    value?:string
    tab?:string
    setTab?:(tab:string)=>void
}

export function TabSelector({
  children, value, tab, setTab,
}:TabSelectorProps) {
  function handleClick() {
    if (setTab) { setTab(value); }
  }

  const selected = tab === value;
  return (
    <Button
      className="flex flex-row items-center h-11 px-4 justify-center gap-1"
      style={selected ? {
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      } : {
        color: 'gray',
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
