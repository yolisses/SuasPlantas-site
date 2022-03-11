import 'reflect-metadata';
import '../styles/globals.css';

import Head from 'next/head';
import Twemoji from 'react-twemoji';
import type { AppProps } from 'next/app';
import { ModalView } from '../modal/ModalView';
import { SnackView } from '../snack/SnackView';
import { ExitIntent } from '../intent/ExitIntent';
import { GooglePrompt } from '../auth/GooglePrompt';
import { usersContext } from '../user/usersContext';
import { devIndicator } from '../utils/devIndicator';
import { plantsContext } from '../plant/plantsContext';
import { questsContext } from '../quest/questsContext';
import { HeaderSelector } from '../header/HeaderSelector';
import { UserContextProvider } from '../auth/userContext';
import { TourContextProvider } from '../tour/TourContext';
import { SizeContextProvider } from '../common/SizeContext';
import { ChatsContextProvider } from '../chat/ChatsContext';
import { ModalContextProvider } from '../modal/ModalContext';
import { SnackContextProvider } from '../snack/SnackContext';
import { ResetOnChangeUser } from '../auth/ResetOnChangeUser';
import { SocketContextProvider } from '../socket/SocketContext';
import { LocationContextProvider } from '../location/LocationContext';
import { PaginationProvider } from '../pagination/PaginationProvider';
import { ChangePageInteract } from '../interactions/ChangePageInteract';
import { TextSearchContextProvider } from '../search/TextSearchContext';
import { GoogleOptimizeHydrate } from '../document/GoogleOptimizeHydrate';
import { notificationsContext } from '../notification/notificationsContext';
import { PushNotificationContextProvider } from '../notification/PushNotificationContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          {devIndicator}
          Suas Plantas - Trocar mudas de plantas
        </title>
        <meta
          name="description"
          content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
        />
      </Head>
      <Twemoji options={{ className: 'twemoji' }}>
        <SnackContextProvider>
          <ModalContextProvider>
            <SizeContextProvider>
              <TourContextProvider>
                {/* depend on location and text searct */}
                <TextSearchContextProvider>
                  <LocationContextProvider>
                    <PaginationProvider Context={usersContext} apiRoute="users">
                      <PaginationProvider Context={plantsContext} apiRoute="plants">
                        <PaginationProvider Context={questsContext} apiRoute="quests">
                          <PaginationProvider Context={notificationsContext} apiRoute="notifications">
                            {/* depend on user */}
                            <UserContextProvider>
                              <PushNotificationContextProvider>
                                {/* depend on user and socket */}
                                <SocketContextProvider>
                                  <ChatsContextProvider>
                                    <HeaderSelector />
                                    <Component {...pageProps} />
                                    <SnackView />
                                    <ModalView />
                                    <ExitIntent />
                                    <GooglePrompt />
                                    <ResetOnChangeUser />
                                    <ChangePageInteract />
                                    <GoogleOptimizeHydrate />
                                  </ChatsContextProvider>
                                </SocketContextProvider>
                              </PushNotificationContextProvider>
                            </UserContextProvider>
                          </PaginationProvider>
                        </PaginationProvider>
                      </PaginationProvider>
                    </PaginationProvider>
                  </LocationContextProvider>
                </TextSearchContextProvider>
              </TourContextProvider>
            </SizeContextProvider>
          </ModalContextProvider>
        </SnackContextProvider>
      </Twemoji>
    </>
  );
}
