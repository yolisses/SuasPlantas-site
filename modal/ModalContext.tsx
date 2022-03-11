import {
  Dispatch,
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

interface IModalContext{
    modal?:JSX.Element
    setModal:Dispatch<SetStateAction<JSX.Element|undefined>>
    close:()=>void
}

export const modalContext = createContext({} as IModalContext);

export function ModalContextProvider({ children }: {children:ReactNode}) {
  const [modal, setModal] = useState<JSX.Element>();

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
