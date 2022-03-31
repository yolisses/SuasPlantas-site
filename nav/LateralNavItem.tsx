import Image from 'next/image';
import { IconType } from 'react-icons';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import {
  gray300, gray400, gray500, green500, green600,
} from '../common/colors';

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
      className="highlight p-2 gap-2 rounded-lg center-row px-2 h-12 whitespace-nowrap"
    >
      { imageSrc
      && (
      <div className={`center ${selected ? 'ring-2 ring-green-500 rounded-full' : ''}`}>
        <Image
          src={imageSrc}
          objectFit="cover"
          width={imageSize}
          height={imageSize}
          className="bg-[#aaa] rounded-full h-5"
        />
      </div>
      )}
      {Icon && (
      <Icon
        size={20}
        color={selected ? green600 : gray400}
      />
      )}
      {text}
    </button>
  );
}
