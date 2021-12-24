import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { authStore } from '../auth/authStore';
import { SignInBox } from '../auth/SignInBox';
import { someImage } from '../mock/someImage';
import { useModal } from '../modal/ModalContext';

export const MeButton = observer(() => {
  const { setModal } = useModal();

  const size = 36;
  return authStore.user ? (
    <Link href={`/users/${authStore.user?.id}`}>
      <div>
        <Image
          width={size}
          height={size}
          src={authStore.user?.image || someImage}
          className="bg-gray-300 rounded-full shadow-md cursor-pointer"
        />
      </div>
    </Link>
  ) : (
    <div
      onClick={() => setModal(<SignInBox />)}
      className="flex flex-row items-center gap-1 cursor-pointer"
    >
      <FaRegUser size={18} />
      <div className="text-lg">Entrar</div>
    </div>
  );
});
