import { modalStore } from '../modal/modalStore';
import { SignInBox } from './SignInBox';
import { useUser } from './userContext';

export function loginBefore(callback: ()=>any) {
  const { user } = useUser();
  if (user) { return callback; }
  return () => {
    modalStore.setModal(<SignInBox />);
  };
}
