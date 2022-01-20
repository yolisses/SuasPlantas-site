import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

interface IModalContext{
    modal?:ReactNode
    setModal:Dispatch<SetStateAction<ReactNode>>
    close:()=>void
}

export const modalContext = createContext({} as IModalContext);

export function ModalContextProvider({ children }: {children:ReactNode}) {
  const [modal, setModal] = useState<ReactNode>();

  function close() {
    setModal(undefined);
  }

  return (
    <modalContext.Provider value={{ modal, setModal, close }}>
      {children}
    </modalContext.Provider>
  );
}

export function useModal() {
  return useContext(modalContext);
}
