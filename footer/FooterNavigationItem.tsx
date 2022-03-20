import Link from 'next/link';
import { NavigationItem } from './NavigationItems';

interface FooterNavigationItemProps{
    item:NavigationItem
    selected?:boolean
}

export function FooterNavigationItem({ item, selected }:FooterNavigationItemProps) {
  const content = (
    <button className="center flex-col">
      {item.Icon && <item.Icon size={24} color={selected ? 'rgb(4 120 87)' : '#888'} />}
      {item.asIcon}
      <div className={`text-xs capitalize ${selected ? 'text-emerald-700' : 'text-gray-500'}`}>
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
