import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { Menu } from '../common/menu/Menu';
import { NotificationsMenu } from './NotificationsMenu';
import { NotificationsToggleWarn } from './NotificationsToggleWarn';

export function NotificationMenuButton() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div>
      <button
        onClick={() => { setOpen(true); }}
      >
        <FaBell />
      </button>
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
