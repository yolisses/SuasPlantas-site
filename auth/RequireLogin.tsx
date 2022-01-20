import { MouseEvent } from 'react';
import { modalStore } from '../modal/modalStore';
import { SignInBox } from './SignInBox';
import { useUser } from './userContext';

export function RequireLogin({ children, ...rest }:any) {
  const { user } = useUser();

  function handleClick(e:MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!user) {
      modalStore.setModal(<SignInBox />);
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
