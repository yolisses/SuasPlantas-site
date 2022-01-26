/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useModal } from '../modal/ModalContext';

export function DevPage() {
  const [enabled, setEnabled] = useState<boolean>();
  const [permission, setPermission] = useState<string>();
  const { setModal } = useModal();

  useEffect(() => {
    if (window.OneSignal && !window.OneSignal.length) {
      window.OneSignal.isPushNotificationsEnabled((isEnabled) => {
        setEnabled(isEnabled);
      });

      window.OneSignal.getNotificationPermission((permission) => {
        setPermission(permission);
      });

      window.OneSignal.on('subscriptionChange', (isSubscribed) => {
        console.log("The user's subscription state is now:", isSubscribed);
        setEnabled(isSubscribed);
      });

      window.OneSignal.on('notificationPermissionChange', (permissionChange) => {
        const currentPermission = permissionChange.to;
        setPermission(currentPermission);
        console.log('New permission state:', currentPermission);
      });
    }
  }, []);

  function setSubscription(value:boolean) {
    if (window.OneSignal && !window.OneSignal.length) {
      window.OneSignal.showNativePrompt();
      window.OneSignal.setSubscription(value);
    }
  }

  return (
    <div>
      Notificações no dispositivo
      {' '}
      {permission === 'denied'
        ? 'bloqueadas'
        : enabled
          ? 'ativadas'
          : 'desativadas'}
      {(permission === 'denied')
        ? (
          <button
            onClick={() => setModal(
              <div>
                <img
                  src="/toggle_notification.png"
                />
              </div>,
            )}
          >
            como desbloquear
          </button>
        ) : (
          <button onClick={() => setSubscription(!enabled)}>
            {!enabled ? 'ativar' : 'desativar'}
          </button>
        )}
    </div>
  );
}
