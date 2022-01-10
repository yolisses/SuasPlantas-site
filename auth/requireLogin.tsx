import { modalStore } from '../modal/modalStore';
import { authStore } from './authStore';
import { SignInBox } from './SignInBox';

export function requireLogin(callback: ()=>any) {
  if (authStore.user) { return callback; }
  return () => {
    modalStore.setModal(<SignInBox />);
    console.log('coisa required');
  };
}
