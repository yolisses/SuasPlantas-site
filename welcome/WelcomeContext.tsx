import {
  createContext, ReactNode, useContext, useState,
} from 'react';
import { useUser } from '../auth/UserContext';

interface WelcomeContext{
  force:()=>void
  shouldPass:boolean
}

const welcomeContext = createContext({} as WelcomeContext);

export function WelcomeContextProvider({ children }:{children:ReactNode}) {
  const { user } = useUser();
  const [forced, setForced] = useState(false);

  const shouldPass = !!user?.plants?.length || forced;

  function force() {
    setForced(true);
  }

  return (
    <welcomeContext.Provider value={{ shouldPass, force }}>
      {children}
    </welcomeContext.Provider>
  );
}

export function useWelcome() {
  return useContext(welcomeContext);
}
