import { MouseEvent } from 'react';
import { useModal } from '../modal/ModalContext';
import { SignInBox } from './SignInBox';
import { useUser } from './userContext';

export function RequireLogin({ children, ...rest }:any) {
  const { user } = useUser();
  const { modal, setModal } = useModal();

  function handleClick(e:MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!user) {
      console.log('user', user);
      console.log('modal', modal);
      setModal(<SignInBox />);
      e.stopPropagation();
      e.preventDefault();
    }
  }

  return (
    <div
      {...rest}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
