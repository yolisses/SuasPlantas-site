import { MouseEvent } from 'react';
import { SignInBox } from './SignInBox';
import { useUser } from './userContext';
import { useModal } from '../modal/ModalContext';

export function useIsLogged() {
  const { user } = useUser();
  const { setModal } = useModal();

  function isLogged(e:MouseEvent) {
    if (!user) {
      e.preventDefault();
      e.stopPropagation();
      setModal(<SignInBox />);
      return false;
    }
    return true;
  }

  return { isLogged };
}
