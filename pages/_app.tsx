import 'reflect-metadata';
import '../mobx/storesConfig';
import '../styles/globals.css';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { theme } from '../mui/theme';
import { SnackView } from '../snack/SnackView';
import { FaviconTags } from '../app/FaviconTags';
import { MuiFontsTags } from '../app/MuiFontsTags';
import { devIndicator } from '../utils/devIndicator';
import { GoogleAnalyticsTags } from '../app/GoogleAnalyticsTags';
import { ModalView } from '../modal/ModalView';
import { NotificationTags } from '../notifications/NotificationTags';

export function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(() => {
      OneSignal.init({
        appId: '1ac64e39-21a6-4059-9956-28075f3cb33b',
        safari_web_id: 'web.onesignal.auto.4ed285de-faf5-4c6c-a346-3ff91e5aded6',
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <FaviconTags />
        <MuiFontsTags />
        <GoogleAnalyticsTags />
        <NotificationTags />
        <title>
          {devIndicator}
          SuasPlantas - Trocar mudas de plantas
        </title>
      </Head>
      <Component {...pageProps} />
      <SnackView />
      <ModalView />
    </ThemeProvider>
  );
}

export default observer(MyApp);
