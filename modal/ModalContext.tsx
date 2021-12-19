import { createContext, ReactNode, useContext, useState } from "react";
import { Modal } from "../common/Modal";

const ModalContext = createContext({});

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
  return useContext(ModalContext);
}
