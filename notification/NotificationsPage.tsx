import { NotificationsMenu } from './NotificationsMenu';
import { NotificationsToggleWarn } from './NotificationsToggleWarn';

export function NotificationsPage() {
  return (
    <div className="p-2">
      <NotificationsToggleWarn />
      <NotificationsMenu />
    </div>
  );
}
