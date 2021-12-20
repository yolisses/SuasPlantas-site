import 'reflect-metadata';

import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FaviconTags } from '../common/FaviconTags';
import { devIndicator } from '../utils/devIndicator';
import { ModalContextProvider } from '../modal/ModalContext';
import { GoogleAnalyticsTags } from '../config/GoogleAnalyticsTags';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Head>
        {/* google login */}
        <meta
          name="google-site-verification"
          content="XipRkG04zmk3gcBYI2q_HzJSU2F6BaT6jbz5N57ilZ8"
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
  );
}
