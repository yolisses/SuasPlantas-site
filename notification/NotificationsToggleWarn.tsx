/* eslint-disable no-nested-ternary */
import { Modal } from '../modal/Modal';
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
        <Modal>
          <div>
            <img
              className="select-none"
              src="/notification/toggle_notification.png"
              alt="para desbloquear as notificações do dispositivo, acesse as configurações do site, próximo ao endereço suasplantas.com, e ligue a opção notificações"
            />
          </div>
        </Modal>,
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
      <button className="secondary-button" onClick={handleButtonClick}>
        {permission === 'denied'
          ? 'Como desbloquear'
          : 'Ativar'}
      </button>
    </div>
  );
}
