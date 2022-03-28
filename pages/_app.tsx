import 'reflect-metadata';
import '../styles/globals.css';

import Twemoji from 'react-twemoji';
import type { AppProps } from 'next/app';

import { Nav } from '../nav/Nav';
import { Footer } from '../footer/Footer';
import { ModalView } from '../modal/ModalView';
import { SnackView } from '../snack/SnackView';
import { ExitIntent } from '../intent/ExitIntent';
import { GooglePrompt } from '../auth/GooglePrompt';
import { usersContext } from '../user/usersContext';
import { DefaultMeta } from '../document/DefaultMeta';
import { plantsContext } from '../plant/plantsContext';
import { questsContext } from '../quest/questsContext';
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
import { MapImportContextProvider } from '../location/leaflet/MapImportContext';
import { PushNotificationContextProvider } from '../notification/PushNotificationContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultMeta />
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
                                    <MapImportContextProvider>
                                      <div className="flex flex-row relative">
                                        <div className="hidden md:inline-block">
                                          <Nav />
                                        </div>
                                        <div className="flex-1 flex flex-col min-h-screen">
                                          <Component {...pageProps} />
                                          <Footer />
                                        </div>
                                      </div>
                                      <SnackView />
                                      <ModalView />
                                      <ExitIntent />
                                      <GooglePrompt />
                                      <ResetOnChangeUser />
                                      <ChangePageInteract />
                                      <GoogleOptimizeHydrate />
                                    </MapImportContextProvider>
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
