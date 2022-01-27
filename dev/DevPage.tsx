import OneSignal from 'react-onesignal';

import { api } from '../api/api';
import { usePushNotification } from '../notification/PushNotificationContext';

export function DevPage() {
  const { subscribed, associateEmailAndUserId } = usePushNotification();

  async function handleClick() {
    try {
      await associateEmailAndUserId();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      oie
      {subscribed}
      <button onClick={handleClick}>butao da alegria</button>
    </div>
  );
}
