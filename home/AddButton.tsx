import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { RequireLogin } from '../auth/RequireLogin';

interface AddButtonProps{
  url:string
}
export function AddButton({ url }:AddButtonProps) {
  return (
    <Link href={url}>
      <a tabIndex={-1}>
        <RequireLogin>
          <button className="fab">
            <FaPlus size={24} color="white" />
          </button>
        </RequireLogin>
      </a>
    </Link>
  );
}
