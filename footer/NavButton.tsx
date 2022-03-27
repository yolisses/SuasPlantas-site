import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IconType } from 'react-icons';

interface NavButtonProps
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    Icon?:IconType
    text:string
}

export function NavButton({ Icon, text, ...rest }:NavButtonProps) {
  return (
    <button {...rest} className="secondary-button text-white gap-1 capitalize">
      {Icon && <Icon />}
      {text}
    </button>
  );
}
