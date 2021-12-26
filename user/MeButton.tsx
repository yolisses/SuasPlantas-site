import { Button } from '@mui/material';
import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { authStore } from '../auth/authStore';
import { RequireLogin } from '../auth/RequireLogin';
import { someImage } from '../mock/someImage';

export const MeButton = observer(() => {
  const size = 36;
  return authStore.user && authStore.token ? (
    <Link href={`/users/${authStore.user?.id}`}>
      <Button>
        <Image
          width={size}
          height={size}
          src={authStore.user?.image || someImage}
          className="bg-gray-300 rounded-full shadow-md cursor-pointer"
        />
      </Button>
    </Link>
  ) : (
    <RequireLogin>
      <div
        className="flex flex-row items-center gap-1 cursor-pointer"
      >
        <FaRegUser size={18} />
        <div className="text-lg">Entrar</div>
      </div>
    </RequireLogin>

  );
});
