import Image from 'next/image';
import { IconType } from 'react-icons';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface NavButtonProps
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  text:string
  Icon?:IconType
  imageSrc?:string
  selected?:boolean
}

export function LateralNavButton({
  Icon, text, selected, imageSrc, ...rest
}:NavButtonProps) {
  const imageSize = 20;
  return (
    <button
      {...rest}
      className={`center-row capitalize gap-2 p-4 md:p-3 rounded-full md:rounded-lg highlight ${
        selected
          ? 'text-emerald-700'
          : 'text-gray-500'
      }`}
    >
      { imageSrc
      && (
        <div className={selected ? 'border-2 center border-emerald-700 rounded-full' : ''}>
          <Image
            src={imageSrc}
            objectFit="cover"
            width={imageSize}
            height={imageSize}
            className="bg-gray-200 rounded-full"
          />
        </div>
      )}
      {Icon && (
      <Icon
        size={20}
      />
      )}
      {text}
    </button>
  );
}
