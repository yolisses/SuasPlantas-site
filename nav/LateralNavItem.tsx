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
      className={`flex flex-row items-center px-2 capitalize gap-2 h-12 w-full whitespace-nowrap rounded-full md:rounded-lg highlight ${
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
