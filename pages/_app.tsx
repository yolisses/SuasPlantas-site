import 'reflect-metadata';
import '../styles/globals.css';

import Head from 'next/head';
// @ts-ignore
import Twemoji from 'react-twemoji';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import { useEffect } from 'react';
import { theme } from '../mui/theme';
import { Header } from '../header/Header';
import { ModalView } from '../modal/ModalView';
import { SnackView } from '../snack/SnackView';
import { HotjarTags } from '../app/HotjarTags';
import { AdSenseTags } from '../app/AdSenseTags';
import { FaviconTags } from '../app/FaviconTags';
import { ExitIntent } from '../intent/ExitIntent';
import { SmartlookTag } from '../app/SmartlookTag';
import { MuiFontsTags } from '../app/MuiFontsTags';
import { interact } from '../interactions/interact';
import { GooglePrompt } from '../auth/GooglePrompt';
import { usersContext } from '../user/usersContext';
import { PreviewWarn } from '../preview/PreviewWarn';
import { devIndicator } from '../utils/devIndicator';
import { plantsContext } from '../plant/plantsContext';
import { questsContext } from '../quest/questsContext';
import { UserContextProvider } from '../auth/userContext';
import { TourContextProvider } from '../tour/TourContext';
import { PreviewProvider } from '../preview/PreviewContext';
import { ModalContextProvider } from '../modal/ModalContext';
import { SnackContextProvider } from '../snack/SnackContext';
import { ResetOnChangeUser } from '../auth/ResetOnChangeUser';
import { GoogleAnalyticsTags } from '../app/GoogleAnalyticsTags';
import { LocationContextProvider } from '../location/LocationContext';
import { PaginationProvider } from '../pagination/PaginationProvider';
import { ChangePageInteract } from '../interactions/ChangePageInteract';
import { TextSearchContextProvider } from '../search/TextSearchContext';
import { notificationsContext } from '../notification/notificationsContext';
import { PushNotificationContextProvider } from '../notification/PushNotificationContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    interact({ type: 'start session', localTime: new Date() });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          {devIndicator}
          Suas Plantas - Trocar mudas de plantas
        </title>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <HotjarTags />
      <AdSenseTags />
      <FaviconTags />
      <MuiFontsTags />
      <SmartlookTag />
      <GoogleAnalyticsTags />
      <TourContextProvider>
        <PreviewProvider>
          <UserContextProvider>
            <SnackContextProvider>
              <ModalContextProvider>
                <TextSearchContextProvider>
                  <LocationContextProvider>
                    <PaginationProvider Context={usersContext} apiRoute="users">
                      <PaginationProvider Context={plantsContext} apiRoute="plants">
                        <PaginationProvider Context={questsContext} apiRoute="quests">
                          <PaginationProvider Context={notificationsContext} apiRoute="notifications">
                            <PushNotificationContextProvider>
                              <Twemoji options={{ className: 'twemoji' }}>
                                <Header />
                                <Component {...pageProps} />
                                <PreviewWarn />
                                <SnackView />
                                <ModalView />
                                <ResetOnChangeUser />
                                <ExitIntent />
                                <ChangePageInteract />
                                <GooglePrompt />
                              </Twemoji>
                            </PushNotificationContextProvider>
                          </PaginationProvider>
                        </PaginationProvider>
                      </PaginationProvider>
                    </PaginationProvider>
                  </LocationContextProvider>
                </TextSearchContextProvider>
              </ModalContextProvider>
            </SnackContextProvider>
          </UserContextProvider>
        </PreviewProvider>
      </TourContextProvider>
    </ThemeProvider>
  );
}
