import { parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useContext } from 'react';

export type TourName = 'Home'|'Quests'

interface TourContext{
    blockHomeTour:boolean
    blockQuestsTour:boolean
    blockTour:(name:TourName)=>void
}

const tourContext = createContext({} as TourContext);

export function TourContextProvider({ children }:{children:ReactNode}) {
  const { blockHomeTour, blockQuestsTour } = parseCookies();

  function blockTour(name:TourName) {
    setCookie(undefined, `block${name}Tour`, 'true', {
      maxAge: 10 * 365 * 24 * 60 * 60, // ten years, cause I didn't find infinite option
    });
  }

  return (
    <tourContext.Provider value={{
      blockTour,
      blockHomeTour: blockHomeTour === 'true',
      blockQuestsTour: blockQuestsTour === 'true',
    }}
    >
      {children}
    </tourContext.Provider>
  );
}

export function useTour() {
  return useContext(tourContext);
}
