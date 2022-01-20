import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { RequireLogin } from '../auth/RequireLogin';

interface AddButtonProps{
  url:string
}
export function AddButton({ url }:AddButtonProps) {
  return (
    <Link href={url}>
      <a className="fab">
        <RequireLogin>
          <FaPlus size={24} color="white" />
        </RequireLogin>
      </a>
    </Link>
  );
}
