import Link from 'next/link';
import { Spacer } from '../common/Spacer';
import { useUser } from '../auth/userContext';
import { useSize } from '../common/SizeContext';
import { MoreMenuButton } from './MoreMenuButton';
import { FacebookButton } from '../auth/FacebookButton';
import { RegisterButton } from '../content/RegisterButton';

export function LoginHeader() {
  const { lg } = useSize();
  const { loginResolved } = useUser();

  return (
    <>
      <header className="text-white fixed flex flex-row px-2 h-12 items-center w-full gap-1 sm:gap-2 z-50 bg-emerald-700 shadow-md">
        <Link href="/landing">
          <a
            className="text-lg leading-5 cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 py-3 px-1 rounded-lg"
          >
            Suas Plantas
          </a>
        </Link>
        <Spacer />
        {loginResolved && (lg ? (
          <FacebookButton />
        )
          : <RegisterButton alt />)}
        <MoreMenuButton />
      </header>
      <div className="h-12" />
    </>
  );
}
