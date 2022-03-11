import { FaRegUser } from 'react-icons/fa';
import { useLoginButton } from './useLoginButton';

export function LoginButtonAlt() {
  const { handleClick } = useLoginButton();
  return (
    <button
      onClick={handleClick}
      className="flex flex-row gap-2 items-center scale-active"
    >
      <FaRegUser />
      <span>
        Entrar
      </span>
    </button>
  );
}
