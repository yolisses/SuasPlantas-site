import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { white } from '../common/colors';
import { useIsLogged } from '../auth/useIsLogged';

interface AddButtonProps{
  url:string
}
export function AddButton({ url }:AddButtonProps) {
  const { isLogged } = useIsLogged();

  return (
    <Link href={url}>
      <a
        className="fab"
        onClick={(e) => {
          if (!isLogged()) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <FaPlus size={24} color={white} />
      </a>
    </Link>
  );
}
