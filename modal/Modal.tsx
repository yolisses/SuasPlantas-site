import { ReactNode, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { useModal } from './ModalContext';
import style from './Modal.module.css';

export interface ModalProps {
  children: ReactNode;
  closeOnClickOut?: boolean;
  showCloseButton?: boolean;
  onClose?:()=>void
}

export function Modal({
  onClose,
  children,
  closeOnClickOut = true,
  showCloseButton = true,
}: ModalProps) {
  const { close } = useModal();

  function handleClickOut() {
    if (closeOnClickOut) close();
  }

  function stopPropagation(e: any) {
    e.stopPropagation();
  }

  function handleEsc(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      close();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => onClose, []);

  return (
    <div
      onClick={handleClickOut}
      className={`fixed top-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-2 ${style.fade}`}
    >
      <div
        onClick={stopPropagation}
        className={`bg-white p-2 rounded-xl pb-8 shadow-lg max-w-screen max-h-screen ${style.rollout}`}
      >
        {showCloseButton && (
          <div className="flex flex-row justify-end w-full">
            <button
              onClick={close}
              className="icon-button"
            >
              <GrClose size={18} />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
