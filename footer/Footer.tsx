import { useSize } from '../common/SizeContext';
import { FooterNavigationItem } from './FooterNavigationItem';
import { navigationItems } from './NavigationItems';

interface FooterProps{
    selected?:string
}

export function Footer({ selected }:FooterProps) {
  const { sm, md } = useSize();
  if (!sm || md) return null;
  return (
    <div className="h-12 relative">
      <div
        style={{ boxShadow: '0 0 4px #0008' }}
        className="h-12 bg-white fixed w-full bottom-0 flex flex-row items-center justify-around"
      >
        {navigationItems.map((item) => <FooterNavigationItem key={item.id} item={item} selected={item.id === selected} />)}
      </div>
    </div>
  );
}
