import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { useIsLogged } from '../auth/useIsLogged';
import style from './AddButton.module.css';

interface AddButtonProps{
  url:string
}
export function AddButton({ url }:AddButtonProps) {
  const { isLogged } = useIsLogged();

  return (
    <Link href={url}>
      <a
        className={`fab ${style.rollout}`}
        onClick={(e) => {
          if (!isLogged()) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <FaPlus size={24} color="white" />
      </a>
    </Link>
  );
}
