import { useModal } from '../modal/ModalContext';
import { authStore } from './authStore';
import { SignInBox } from './SignInBox';

export function RequireLogin({ children, onClick, ...rest }:any) {
  const { setModal } = useModal();

  function handleClick(e) {
    if (!authStore.token) {
      setModal(<SignInBox />);
      e.stopPropagation();
      e.preventDefault();
    } else {
      onClick(e);
    }
  }

  return (
    <div {...rest} onClick={handleClick}>
      {children}
    </div>
  );
}
