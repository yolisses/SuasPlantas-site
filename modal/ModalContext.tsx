import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

interface IModalContext{
    modal?:ReactNode
    setModal:(content:ReactNode, onClose:()=>void)=>void
    close:()=>void
}

export const modalContext = createContext({} as IModalContext);

export function ModalContextProvider({ children }: {children:ReactNode}) {
  const [modal, _setModal] = useState<ReactNode>();

  function close() {
    _setModal(undefined);
  }

  function setModal(content:ReactNode, onClose?:()=>void) {
    _setModal(content);
    if (onClose) onClose();
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
