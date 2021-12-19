import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useModal } from "../modal/ModalContext";

export interface ModalProps {
  children: ReactNode;
  hideOnClickOut?: boolean;
  showCloseButton?: boolean;
}

export function Modal({
  children,
  hideOnClickOut = true,
  showCloseButton = true,
}: ModalProps) {
  const { setModal } = useModal();

  function handleClickOut() {
    if (hideOnClickOut) close();
  }

  function close() {
    setModal(undefined);
  }

  return (
    <div
      onClick={handleClickOut}
      className="fixed top-0 z-50 w-full h-full bg-black bg-opacity-40 flex items-center justify-center p-2"
    >
      <div className="bg-white p-2 rounded-xl pb-8 shadow-lg">
        {showCloseButton && (
          <div className="flex flex-row justify-end w-full">
            <div className="cursor-pointer p-2 hover:bg-black hover:bg-opacity-10 rounded-full">
              <GrClose size={18} onClick={close} />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
