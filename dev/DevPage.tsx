import { useEffect, useState } from 'react';
import OneSignal from 'react-onesignal';

import { api } from '../api/api';
import { usePushNotification } from '../notification/PushNotificationContext';
import { User } from '../user/User';

export function DevPage() {
  const { subscribed, associateEmailAndUserId } = usePushNotification();

  async function handleClick() {
    try {
      await associateEmailAndUserId();
    } catch (err) {
      console.error(err);
    }
  }

  const [me, setMe] = useState<User>();

  async function getMe() {
    const res = await api.get('users/me');
    setMe(res.data);
  }

  useEffect(() => {
    getMe();
  });

  return (
    <div>
      oie
      {subscribed}
      <button onClick={handleClick}>butao da alegria</button>
      {JSON.stringify(me)}
    </div>
  );
}
