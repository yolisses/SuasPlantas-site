import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { useIsLogged } from '../auth/useIsLogged';

interface AddButtonProps{
  url:string
}
export function AddButton({ url }:AddButtonProps) {
  const { isLogged } = useIsLogged();

  return (
    <Link href={url}>
      <a className="fab" onClick={isLogged}>
        <FaPlus size={24} color="white" />
      </a>
    </Link>
  );
}
