import Image from 'next/image';
import { IconType } from 'react-icons';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { mainColor } from '../common/mainColor';
import { gray } from '../common/gray';

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
      className="secondary-button text-black justify-start flex flex-row items-center px-2 h-12 whitespace-nowrap"
    >
      { imageSrc
      && (
        <div className={selected ? 'border-2 center border-green-500 rounded-full' : ''}>
          <Image
            src={imageSrc}
            objectFit="cover"
            width={imageSize}
            height={imageSize}
            className="bg-[#aaa] rounded-full"
          />
        </div>
      )}
      {Icon && (
      <Icon
        size={20}
        color={selected ? '#080' : gray}
      />
      )}
      {text}
    </button>
  );
}
