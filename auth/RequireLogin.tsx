import { MouseEvent } from 'react';
import { modalStore } from '../modal/modalStore';
import { authStore } from './authStore';
import { SignInBox } from './SignInBox';

export function RequireLogin({ children, onClick, ...rest }:any) {
  function handleClick(e:MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!authStore.user) {
      modalStore.setModal(<SignInBox />);
      e.stopPropagation();
      e.preventDefault();
    } else {
      onClick(e);
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
