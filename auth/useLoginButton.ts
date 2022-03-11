import { useRouter } from 'next/router';
import { useIsLogged } from './useIsLogged';
import { interact } from '../interactions/interact';

export function useLoginButton() {
  const { basePath } = useRouter();
  interact({ type: 'click sign in button', path: basePath });
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
