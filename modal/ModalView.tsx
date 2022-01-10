import { observer } from 'mobx-react-lite';
import { Modal } from '../common/Modal';
import { modalStore } from './modalStore';

function ImplModalView() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {modalStore.modal
        ? (
          <Modal>{modalStore.modal}</Modal>
        ) : undefined}
    </>
  );
}

export const ModalView = observer(ImplModalView);
