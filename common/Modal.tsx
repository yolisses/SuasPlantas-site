import { ReactNode, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { useModal } from '../modal/ModalContext';

export interface ModalProps {
  children: ReactNode;
  closeOnClickOut?: boolean;
  showCloseButton?: boolean;
}

export function Modal({
  children,
  closeOnClickOut = true,
  showCloseButton = true,
}: ModalProps) {
  const { setModal } = useModal();

  function close() {
    setModal(undefined);
  }

  function handleClickOut() {
    if (closeOnClickOut) close();
  }

  function stopPropagation(e: any) {
    e.stopPropagation();
  }

  function handleEsc(e: KeyboardEvent) {
    if (e.code === 'Escape') close();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div
      onClick={handleClickOut}
      className="fixed top-0 z-50 w-full h-full bg-black bg-opacity-40 flex items-center justify-center p-2"
    >
      <div
        className="bg-white p-2 rounded-xl pb-8 shadow-lg"
        onClick={stopPropagation}
      >
        {showCloseButton && (
          <div className="flex flex-row justify-end w-full">
            <div className="cursor-pointer p-2 hover:bg-black hover:bg-opacity-10 rounded-full" onClick={close}>
              <GrClose size={18} />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
