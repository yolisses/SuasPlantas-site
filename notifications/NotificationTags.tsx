/* eslint-disable no-undef */
import Head from 'next/head';
import { useEffect } from 'react';

declare global {
    interface Window {
        OneSignal: any;
    }
}

declare let OneSignal: any;

export function NotificationTags() {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(() => {
      OneSignal.init({
        appId: '1ac64e39-21a6-4059-9956-28075f3cb33b',
        safari_web_id: 'web.onesignal.auto.4ed285de-faf5-4c6c-a346-3ff91e5aded6',
        notifyButton: {
          enable: true,
        },
        welcomeNotification: {
          title: 'Obrigado por ligar as notificações',
          message: 'É assim que elas aparecem',
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <Head>
      <script
        src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
        async
      />
    </Head>
  );
}
