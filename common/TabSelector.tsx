import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface TabSelectorProps{
  id?:string
  tab?:string
  value?:string
  Icon?:IconType
  children:ReactNode
  setTab?:(tab:string)=>void
}

export function TabSelector({
  children, value, tab, setTab, id, Icon, ...rest
}:TabSelectorProps&DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  function handleClick() {
    if (setTab && value) { setTab(value); }
  }

  const selected = tab === value;
  return (
    <button
      id={id}
      onClick={handleClick}
      className={`secondary-button text-black center-row h-12 px-2 sm:px-4 justify-center gap-1 ${
        selected
          ? 'border-green-600 border-b-2 rounded-b-none'
          : ''
      }`}
      {...rest}
    >
      { Icon && (
      <Icon
        color={selected ? '#080' : '#bbb'}
      />
      )}
      {children}
    </button>
  );
}
