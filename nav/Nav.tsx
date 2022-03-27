import { NavItems } from '../footer/NavItems';
import { MoreMenuButton } from '../header/MoreMenuButton';
import { NotificationMenuButton } from '../notification/NotificationMenuButton';
import { HomeButton } from './HomeButton';

export function Nav() {
  return (
    <nav className="flex flex-col">
      <HomeButton />
      <NavItems styleContext="header" />
      <NotificationMenuButton />
      <MoreMenuButton />
    </nav>
  );
}
