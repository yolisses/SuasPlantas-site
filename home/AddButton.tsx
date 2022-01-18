import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { RequireLogin } from '../auth/RequireLogin';

export function AddButton() {
  return (
    <Link href="plants/add">
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
