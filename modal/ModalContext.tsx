import { createContext, ReactNode, useContext, useState } from "react";
import { Modal } from "../common/Modal";

interface IModalContext {
  modal: ReactNode;
  setModal: (modal?: ReactNode) => void;
}

const defaultState: IModalContext = {
  modal: undefined,
  setModal: () => {},
};

const ModalContext = createContext<IModalContext>(defaultState);

export interface ModalContextProviderProps {
  children: ReactNode;
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState<ReactNode>();

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
      {!!modal && <Modal>{modal}</Modal>}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext<IModalContext>(ModalContext);
}
