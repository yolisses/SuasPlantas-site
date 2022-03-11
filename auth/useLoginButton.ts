import { useRouter } from 'next/router';
import { useIsLogged } from './useIsLogged';

export function useLoginButton() {
  const { isLogged } = useIsLogged();
  const { push } = useRouter();
  function handleClick() {
    const alreadyLogged = isLogged(() => {
      push('/');
    });
    if (alreadyLogged) push('/');
  }
  return { handleClick };
}
