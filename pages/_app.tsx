import 'reflect-metadata';
import '../mobx/storesConfig';

import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { FaviconTags } from '../common/FaviconTags';
import { devIndicator } from '../utils/devIndicator';
import { ModalContextProvider } from '../modal/ModalContext';
import { GoogleAnalyticsTags } from '../config/GoogleAnalyticsTags';
import { theme } from '../mui/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <Head>
          {/* google login */}
          <meta
            name="google-site-verification"
            content="XipRkG04zmk3gcBYI2q_HzJSU2F6BaT6jbz5N57ilZ8"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <title>
            {devIndicator}
            SuasPlantas - Trocar mudas de plantas
          </title>
          <FaviconTags />
          <GoogleAnalyticsTags />
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ModalContextProvider>
    </ThemeProvider>
  );
}
