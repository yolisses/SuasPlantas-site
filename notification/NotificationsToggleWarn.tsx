/* eslint-disable no-nested-ternary */
import { useModal } from '../modal/ModalContext';
import { useNotificationPermission } from './NotificationPermissionContext';

export function NotificationsToggleWarn() {
  const {
    permission,
    subscribed,
    setSubscribed,
  } = useNotificationPermission();
  const { setModal } = useModal();

  if (subscribed === true || subscribed === undefined) { return null; }

  return (
    <div>
      Notificações no dispositivo
      {' '}
      {permission === 'denied'
        ? 'bloqueadas'
        : 'desativadas'}
      .
      {(permission === 'denied')
        ? (
          <button
            onClick={() => setModal(
              <div>
                <img src="/toggle_notification.png" alt="para desbloquear as notificações do dispositivo, acesse as configurações do site, próximo ao endereço suasplantas.com, e ligue a opção notificações" />
              </div>,
            )}
          >
            Como desbloquear
          </button>
        ) : (
          <button onClick={() => setSubscribed(!subscribed)} className="inline-block align-text-top">
            Ativar
          </button>
        )}
    </div>
  );
}
