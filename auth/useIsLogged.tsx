import { SignInBox } from './SignInBox';
import { useUser } from './userContext';
import { useModal } from '../modal/ModalContext';

export function useIsLogged() {
  const { user } = useUser();
  const { setModal } = useModal();

  function isLogged() {
    if (!user) {
      setModal(<SignInBox />);
      return false;
    }
    return true;
  }

  return { isLogged };
}
