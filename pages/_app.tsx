import 'reflect-metadata';
import '../mobx/storesConfig';
import '../styles/globals.css';

import Head from 'next/head';
// @ts-ignore
import Twemoji from 'react-twemoji';
import type { AppProps } from 'next/app';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from '@mui/material';

import { theme } from '../mui/theme';
import { Header } from '../common/Header';
import { ModalView } from '../modal/ModalView';
import { SnackView } from '../snack/SnackView';
import { FaviconTags } from '../app/FaviconTags';
import { MuiFontsTags } from '../app/MuiFontsTags';
import { devIndicator } from '../utils/devIndicator';
import { plantsContext } from '../plant/plantsContext';
import { questsContext } from '../quest/questsContext';
import { GoogleAnalyticsTags } from '../app/GoogleAnalyticsTags';
import { NotificationTags } from '../notifications/NotificationTags';
import { PaginationProvider } from '../pagination/PaginationProvider';
import { TextSearchContextProvider } from '../search/TextSearchContext';

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          {devIndicator}
          SuasPlantas - Trocar mudas de plantas
        </title>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />
      </Head>
      <FaviconTags />
      <MuiFontsTags />
      <GoogleAnalyticsTags />
      <NotificationTags />
      <Twemoji options={{ className: 'twemoji' }}>
        <TextSearchContextProvider>
          <PaginationProvider Context={plantsContext} apiRoute="plants">
            <PaginationProvider Context={questsContext} apiRoute="quests">
              <Header />
              <Component {...pageProps} />
            </PaginationProvider>
          </PaginationProvider>
        </TextSearchContextProvider>
        <SnackView />
        <ModalView />
      </Twemoji>
    </ThemeProvider>
  );
}

export default observer(MyApp);
