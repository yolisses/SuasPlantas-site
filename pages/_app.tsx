import 'reflect-metadata';
import '../mobx/storesConfig';
import '../styles/globals.css';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react';
import { theme } from '../mui/theme';
import { SnackView } from '../snack/SnackView';
import { FaviconTags } from '../app/FaviconTags';
import { MuiFontsTags } from '../app/MuiFontsTags';
import { devIndicator } from '../utils/devIndicator';
import { ModalContextProvider } from '../modal/ModalContext';
import { GoogleAnalyticsTags } from '../app/GoogleAnalyticsTags';

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <Head>
          <FaviconTags />
          <MuiFontsTags />
          <GoogleAnalyticsTags />
          <title>
            {devIndicator}
            SuasPlantas - Trocar mudas de plantas
          </title>
        </Head>
        <Component {...pageProps} />
        <SnackView />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default observer(MyApp);
