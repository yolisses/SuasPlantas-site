import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { navigationButtonColor } from '../header/navigationButtonColor';

interface FooterButtonProps extends HTMLAttributes<HTMLButtonElement>{
  href?:string
  text?:string
  Icon?:IconType
  selected?:boolean
  asIcon?:ReactNode
}

export function FooterButton({
  selected, Icon, href, text, asIcon, ...rest
}:FooterButtonProps) {
  const content = (
    <button className="secondary-button flex center-col gap-0" {...rest}>
      {!!Icon && <Icon size={25} color={selected ? 'rgb(4 120 87)' : navigationButtonColor} />}
      {asIcon}
      <div className="text-sm capitalize">{text}</div>
    </button>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }
  return content;
}
