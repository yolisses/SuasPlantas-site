import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';

export function MeButton() {
  const size = 30;
  const { user } = useUser();
  const { isLogged } = useIsLogged();

  function handleClick() {
    isLogged();
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { user ? (
        <Link href={`/users/${user?.id}`}>
          <a className="icon-button p-2">
            <Image
              width={size}
              height={size}
              objectFit="cover"
              alt={user?.name}
              src={user?.image || userImage}
              className="bg-gray-300 rounded-full shadow-md cursor-pointer"
            />
          </a>
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className="secondary-button center-row gap-1 cursor-pointer text-white"
        >
          <FaRegUser size={18} />
          <div className="text-lg">Entrar</div>
        </button>
      )}
    </>
  );
}
