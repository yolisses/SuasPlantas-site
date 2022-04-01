import Image from 'next/image';
import { IconType } from 'react-icons';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyleContext } from './styleContext';
import { emerald700, gray500 } from '../common/colors';

interface NavButtonProps
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  text:string
  Icon?:IconType
  imageSrc?:string
  selected?:boolean
  styleContext:StyleContext
}

export function NavButton({
  Icon, text, selected, styleContext, imageSrc, ...rest
}:NavButtonProps) {
  const isFooter = styleContext === 'footer';
  const isHeader = styleContext === 'header';
  const imageSize = 20;
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
      {imageSrc
      && (
        <div className={selected ? 'border-2 center border-emerald-700 rounded-full' : ''}>
          <Image
            src={imageSrc}
            objectFit="cover"
            width={imageSize}
            height={imageSize}
            className="bg-gray-500 rounded-full"
          />
        </div>
      )}
      {Icon && (
      <Icon
        size={20}
        color={
          isFooter
            ? selected
              ? emerald700
              : gray500
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
