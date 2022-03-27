import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IconType } from 'react-icons';
import { mainColor } from '../common/mainColor';
import { StyleContext } from './styleContext';

interface NavButtonProps
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  text:string
  Icon?:IconType
  selected?:boolean
  styleContext:StyleContext
}

export function NavButton({
  Icon, text, selected, styleContext, ...rest
}:NavButtonProps) {
  const isFooter = styleContext === 'footer';
  const isHeader = styleContext === 'header';
  return (
    <button
      {...rest}
      className={`center capitalize ${
        isFooter ? `flex-col text-sm ${
          selected
            ? 'text-emerald-700'
            : 'text-gray-500 '}`
          : 'gap-1 p-4 md:p-3 rounded-full md:rounded-lg highlight'}`}
    >
      {Icon && (
      <Icon
        size={20}
        color={
          isFooter
            ? selected
              ? ' rgb(4 120 87)'
              : 'rgb(156 163 175)'
            : undefined
      }
      />
      )}
      <span className={
        isHeader
          ? 'hidden md:inline-block'
          : undefined
        }
      >
        {text}
      </span>
    </button>
  );
}
