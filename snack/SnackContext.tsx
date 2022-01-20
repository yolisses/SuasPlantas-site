import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { ISnack } from './Snack';

interface ISnackContext{
    snack?:ISnack
    setSnack:Dispatch<SetStateAction<ISnack|undefined>>
    close:()=>void
}

export const snackContext = createContext({} as ISnackContext);

export function SnackContextProvider({ children }: {children:ReactNode}) {
  const [snack, setSnack] = useState<ISnack>();

  function close() {
    setSnack(undefined);
  }

  return (
    <snackContext.Provider value={{ snack, setSnack, close }}>
      {children}
    </snackContext.Provider>
  );
}

export function useSnack() {
  return useContext(snackContext);
}
