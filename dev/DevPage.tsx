import OneSignal from 'react-onesignal';

import { api } from '../api/api';
import { usePushNotification } from '../notification/PushNotificationContext';

export function DevPage() {
  async function getHash() {
    try {
      const res = await api.get('notifications/hash');
      const hash = res.data;
      console.log(hash);
      OneSignal.setEmail(
        'stunik@gmail.com',
        { emailAuthHash: hash },
      );
    } catch (err) {
      console.error(err);
    }
  }

  const { subscribed } = usePushNotification();

  return (
    <div>
      oie
      {subscribed}
      <button onClick={getHash}>butao da alegria</button>
    </div>
  );
}
