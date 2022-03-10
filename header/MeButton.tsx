import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';
import { usePreview } from '../preview/PreviewContext';
import { PreviewIndicator } from '../preview/PreviewIndicator';

export function MeButton() {
  const { user: actualUser } = useUser();
  const { user: previewUser } = usePreview();
  const { isLogged } = useIsLogged();
  const size = 30;

  const user = previewUser || actualUser;

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
            {user.preview && (
              <div className="relative">
                <div className="absolute bottom-1 -left-4">
                  <PreviewIndicator />
                </div>
              </div>
            )}
          </a>
        </Link>
      ) : (
        <button
          onClick={isLogged}
          className="secondary-button center-row gap-1 cursor-pointer text-white"
        >
          <FaRegUser size={18} />
          <div className="text-lg">Entrar</div>
        </button>
      )}
    </>
  );
}
