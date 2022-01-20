import { useModal } from './ModalContext';
import { Modal } from './Modal';

export function ModalView() {
  const { modal } = useModal();
  return (
    <>
      {!!modal && (
      <Modal>
        {modal}
      </Modal>
      )}
    </>
  );
}
