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
        appId: '71765db2-d95f-4240-9692-cea9d6f692eb',
        safari_web_id: '',
        notifyButton: {
          enable: false,
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
