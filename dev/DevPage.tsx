import { api } from '../api/api';
import { OneSignal } from '../notification/OneSignal';
import { usePushNotification } from '../notification/PushNotificationContext';

export function DevPage() {
  async function getHash() {
    try {
      const res = await api.get('notifications/hash');
      const hash = res.data;
      console.log(hash);
      OneSignal.push(() => {
        OneSignal.setEmail(
          'stunik@gmail.com',
          { emailAuthHash: hash },
        );
      });
    } catch (err) {
      console.error(err);
    }
  }

  const { subscribed } = usePushNotification();

  return (
    <div>
      oie
      <button onClick={getHash}>butao da alegria</button>
    </div>
  );
}
