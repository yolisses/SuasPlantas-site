import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IconType } from 'react-icons';

interface NavButtonProps
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    Icon?:IconType
    text:string
}

export function NavButton({ Icon, text, ...rest }:NavButtonProps) {
  return (
    <button {...rest}>
      {Icon && <Icon />}
      {text}
    </button>
  );
}
