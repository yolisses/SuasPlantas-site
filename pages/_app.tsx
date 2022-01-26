import 'reflect-metadata';
import '../styles/globals.css';

import Head from 'next/head';
// @ts-ignore
import Twemoji from 'react-twemoji';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import { theme } from '../mui/theme';
import { Header } from '../common/Header';
import { ModalView } from '../modal/ModalView';
import { SnackView } from '../snack/SnackView';
import { FaviconTags } from '../app/FaviconTags';
import { MuiFontsTags } from '../app/MuiFontsTags';
import { usersContext } from '../user/usersContext';
import { devIndicator } from '../utils/devIndicator';
import { plantsContext } from '../plant/plantsContext';
import { questsContext } from '../quest/questsContext';
import { UserContextProvider } from '../auth/userContext';
import { ModalContextProvider } from '../modal/ModalContext';
import { SnackContextProvider } from '../snack/SnackContext';
import { GoogleAnalyticsTags } from '../app/GoogleAnalyticsTags';
import { NotificationTags } from '../notification/NotificationTags';
import { PaginationProvider } from '../pagination/PaginationProvider';
import { TextSearchContextProvider } from '../search/TextSearchContext';
import { notificationsContext } from '../notification/notificationsContext';
import { NotificationPermissionContextProvider } from '../notification/NotificationPermissionContext';
import { ResetOnChangeUser } from '../auth/ResetOnChangeUser';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          {devIndicator}
          SuasPlantas - Trocar e vender mudas de plantas
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
      <UserContextProvider>
        <SnackContextProvider>
          <ModalContextProvider>
            <TextSearchContextProvider>
              <PaginationProvider Context={plantsContext} apiRoute="plants">
                <PaginationProvider Context={usersContext} apiRoute="users">
                  <PaginationProvider Context={questsContext} apiRoute="quests">
                    <PaginationProvider Context={notificationsContext} apiRoute="notifications">
                      <NotificationPermissionContextProvider>
                        <Twemoji options={{ className: 'twemoji' }}>
                          <Header />
                          <Component {...pageProps} />
                          <SnackView />
                          <ModalView />
                          <ResetOnChangeUser />
                        </Twemoji>
                      </NotificationPermissionContextProvider>
                    </PaginationProvider>
                  </PaginationProvider>
                </PaginationProvider>
              </PaginationProvider>
            </TextSearchContextProvider>
          </ModalContextProvider>
        </SnackContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}
