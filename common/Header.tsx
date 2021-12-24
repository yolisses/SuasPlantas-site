import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { MeButton } from '../user/MeButton';
import { SignInBox } from '../auth/SignInBox';
import { HeaderLayout } from './HeaderLayout';
import { useModal } from '../modal/ModalContext';

interface HeaderProps {
  searchQuery?: string;
}

export function Header({ searchQuery }: HeaderProps) {
  const { setModal } = useModal();

  const authenticated = (Cookies.get('authenticated')) === 'true';
  console.log(authenticated);

  return (
    <HeaderLayout className="bg-green-700 text-white" goBackButton={false}>
      <div className="mr-auto">
        <Link href="/">
          <div className="flex flex-row items-center gap-1">
            {/* <div className="self-stretch hidden sm:inline-flex flex justify-center">
              <Image src="/icon-white.png  " width={20} height={20} />
            </div> */}
            <div className="text-lg cursor-pointer">SuasPlantas</div>
          </div>
        </Link>
      </div>
      {/* <SearchTop query={searchQuery} /> */}
      <div className="ml-auto flex justify-center flex-row gap-2">
        <MeButton />
        <div
          onClick={() => setModal(<SignInBox />)}
          className="flex flex-row items-center gap-1 cursor-pointer"
        >
          <FaRegUser size={18} />
          <div className="text-lg">Entrar</div>
        </div>
      </div>
    </HeaderLayout>
  );
}
