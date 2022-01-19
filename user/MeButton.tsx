import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { userImage } from '../images/user';
import { authStore } from '../auth/authStore';
import { RequireLogin } from '../auth/RequireLogin';

export const MeButton = observer(() => {
  const size = 30;
  return authStore.user ? (
    <Link href={`/users/${authStore.user?.id}`}>
      <a>
        <button
          className="icon-button p-2"
        >
          <Image
            width={size}
            height={size}
            objectFit="cover"
            alt={authStore.user?.name}
            src={authStore.user?.image || userImage}
            className="bg-gray-300 rounded-full shadow-md cursor-pointer"
          />
        </button>
      </a>
    </Link>
  ) : (
    <RequireLogin>
      <button className="flex flex-row items-center gap-1 cursor-pointer text-white">
        <FaRegUser size={18} />
        <div className="text-lg">Entrar</div>
      </button>
    </RequireLogin>
  );
});
