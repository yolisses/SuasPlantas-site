import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { Menu } from '../common/menu/Menu';
import { NotificationsMenu } from './NotificationsMenu';
import { NotificationsToggleWarn } from './NotificationsToggleWarn';
import { HeaderNavigationItem } from '../header/HeaderNavigationItem';

export function NotificationMenuButton() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div>
      <HeaderNavigationItem
        onClick={() => { setOpen(true); }}
        item={{
          Icon: FaBell,
          id: 'notifications',
          text: 'notificações',
        }}
      />
      {open && (
      <div className="fixed right-0 sm:right-2">
        <div className="absolute right-0">
          <Menu onClose={closeMenu}>
            <NotificationsToggleWarn />
            <NotificationsMenu closeMenu={closeMenu} />
          </Menu>
        </div>
      </div>
      )}
    </div>
  );
}
