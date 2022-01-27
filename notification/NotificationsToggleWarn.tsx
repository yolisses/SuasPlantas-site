/* eslint-disable no-nested-ternary */
import { useModal } from '../modal/ModalContext';
import { usePushNotification } from './PushNotificationContext';

export function NotificationsToggleWarn() {
  const {
    subscribed,
    permission,
    setSubscribed,
  } = usePushNotification();
  const { setModal } = useModal();

  function handleButtonClick() {
    setSubscribed(true);
    if (permission === 'denied') {
      setModal(
        <div>
          <img
            className="select-none"
            src="/toggle_notification.png"
            alt="para desbloquear as notificações do dispositivo, acesse as configurações do site, próximo ao endereço suasplantas.com, e ligue a opção notificações"
          />
        </div>,
      );
    }
  }

  if (subscribed === true || subscribed === undefined) { return null; }

  return (
    <div>
      Notificações no dispositivo
      {' '}
      {permission === 'denied'
        ? 'bloqueadas'
        : 'desativadas'}
      .
      <button onClick={handleButtonClick}>
        {permission === 'denied'
          ? 'Como desbloquear'
          : 'Ativar'}
      </button>
    </div>
  );
}
