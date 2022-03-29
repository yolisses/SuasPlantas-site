import { NotificationsMenu } from './NotificationsMenu';
import { NotificationsToggleWarn } from './NotificationsToggleWarn';

export function NotificationsPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="title-header">Notificações</div>
      <div className="py-2 px-3">
        <NotificationsToggleWarn />
      </div>
      <div className="flex-1 center">
        <NotificationsMenu />
      </div>
    </div>
  );
}
