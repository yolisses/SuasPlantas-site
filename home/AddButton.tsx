import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { Fab } from '@mui/material';
import { RequireLogin } from '../auth/RequireLogin';

export function AddButton() {
  return (
    <Link href="plants/add">
      <a tabIndex={-1}>
        <RequireLogin>
          <Fab color="primary" aria-label="add">
            <FaPlus size={24} color="white" />
          </Fab>
        </RequireLogin>
      </a>
    </Link>
  );
}
