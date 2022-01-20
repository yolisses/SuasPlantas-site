import { SignInBox } from './SignInBox';
import { useModal } from '../modal/ModalContext';
import { useUser } from './userContext';

export function useRequireLogin() {
  const { user } = useUser();
  const { setModal } = useModal();

  function requireLogin(callback: ()=>any) {
    if (user) { return callback; }
    setModal(<SignInBox />);
  }

  return requireLogin;
}
