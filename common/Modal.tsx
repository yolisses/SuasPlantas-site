import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <div className="fixed top-0 z-50 w-full h-full bg-black bg-opacity-40 flex items-center justify-center p-2">
      <div className="bg-white p-2 rounded-xl">{children}</div>
    </div>
  );
}
