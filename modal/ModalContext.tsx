import {
  Dispatch,
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
  ReactChild,
} from 'react';
import { Modal } from './Modal';

interface IModalContext{
    modal?:ReactNode
    setModal:Dispatch<SetStateAction<ReactChild>>
    close:()=>void
}

export const modalContext = createContext({} as IModalContext);

export function ModalContextProvider({ children }: {children:ReactNode}) {
  const [modal, setModal] = useState<ReactChild>();

  function close() {
    setModal(undefined);
  }

  console.log(modal?.props);
  console.log(Object.keys(modal?.props || {}));

  return (
    <modalContext.Provider value={{ modal, setModal, close }}>
      {children}
    </modalContext.Provider>
  );
}

export function useModal() {
  return useContext(modalContext);
}
