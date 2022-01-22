import { SignInBox } from './SignInBox';
import { useModal } from '../modal/ModalContext';
import { useUser } from './userContext';

export function useIsLogged() {
  const { user } = useUser();
  const { setModal } = useModal();

  function isLogged(e) {
    if (!user) {
      e.preventDefault();
      e.stopPropagation();
      setModal(<SignInBox />);
    }
  }

  return { isLogged };
}
