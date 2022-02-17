import { SignInBox } from './SignInBox';
import { useUser } from './userContext';
import { useModal } from '../modal/ModalContext';
import { Modal } from '../modal/Modal';

export function useIsLogged() {
  const { user } = useUser();
  const { setModal } = useModal();

  function isLogged() {
    if (!user) {
      setModal(
        <Modal>
          <SignInBox />
        </Modal>,
      );
      return false;
    }
    return true;
  }

  return { isLogged };
}
