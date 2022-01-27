import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import Head from 'next/head';
import OneSignal from 'react-onesignal';

interface IPushNotification{
    permission?:string
    subscribed?:boolean
    setSubscribed:(value: boolean) => void
    setPermission:Dispatch<SetStateAction<string|undefined>>
}

const pushNotificationContext = createContext({} as IPushNotification);

export function PushNotificationContextProvider({ children }:{children:ReactNode}) {
  const [subscribed, setSubscribedValue] = useState<boolean>();
  const [permission, setPermission] = useState<string>();

  useEffect(() => {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID!,
      safari_web_id: process.env.NEXT_PUBLIC_ONE_SIGNAL_SAFARI_WEB_ID,
      welcomeNotification: {
        title: 'Obrigado por ligar as notificações',
        message: 'É assim que elas aparecem',
      },
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false,
      },
    });
    OneSignal.isPushNotificationsEnabled(
      (isSubscribed:boolean) => setSubscribedValue(isSubscribed),
    );
    OneSignal.getNotificationPermission(
      (permission:string) => setPermission(permission),
    );
    OneSignal.on(
      'subscriptionChange',
      (isSubscribed:boolean) => setSubscribedValue(isSubscribed),
    );
    OneSignal.on(
      'pushNotificationChange',
      ({ to }:{to:string}) => setPermission(to),
    );
  }, []);

  function setSubscribed(value:boolean) {
    OneSignal.showNativePrompt();
    OneSignal.setSubscription(value);
  }

  return (
    <pushNotificationContext.Provider value={{
      subscribed, permission, setSubscribed, setPermission,
    }}

    >
      <Head>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async
        />
      </Head>
      {children}
    </pushNotificationContext.Provider>
  );
}

export function usePushNotification() {
  return useContext(pushNotificationContext);
}
