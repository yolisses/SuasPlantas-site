import { NotificationsMenu } from './NotificationsMenu';
import { NotificationsToggleWarn } from './NotificationsToggleWarn';

export function NotificationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-lg h-12 shadow center-row p-3">Notificações</div>
      <div className="flex-1 center">
        <NotificationsToggleWarn />
        <NotificationsMenu />
      </div>
    </div>
  );
}
