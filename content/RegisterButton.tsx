import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useIsLogged } from '../auth/useIsLogged';
import { interact } from '../interactions/interact';

export function RegisterButton({ alt }:{alt?:boolean}) {
  const { basePath } = useRouter();

  const { push } = useRouter();
  const { isLogged } = useIsLogged();

  function handleClick(e:MouseEvent) {
    e.preventDefault();
    interact({
      path: basePath,
      type: 'click sign in button',
    });

    const alreadyLogged = isLogged(() => {
      push('/');
    });
    if (alreadyLogged) push('/');
    return alreadyLogged;
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      className={alt
        ? 'flex flex-row gap-2 items-center scale-active'
        : 'center-row gap-2 p-3 justify-center rounded-lg text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500 cursor-pointer'}
    >
      <FaRegUser />
      Entrar
    </a>
  );
}
