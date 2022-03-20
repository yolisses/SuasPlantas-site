import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { NavigationItem } from '../footer/NavigationItems';

interface HeaderNavigationProps extends HTMLAttributes<HTMLButtonElement>{
  item:NavigationItem
}

export function HeaderNavigationItem({ item, ...rest }:HeaderNavigationProps) {
  const content = (
    <button className="secondary-button py-3 text-white gap-1 center-row" {...rest}>
      {!!item.Icon && <item.Icon size={20} />}
      {item.asIcon}
      <div className="capitalize hidden lg:inline-block">
        {item.text}
      </div>
    </button>
  );
  if (item.href) {
    return (
      <Link href={item.href}>
        {content}
      </Link>
    );
  }
  return content;
}
