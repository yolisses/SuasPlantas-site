import { Spacer } from '../common/Spacer';
import { useSize } from '../size/SizeContext';
import { MoreMenuButton } from './MoreMenuButton';
import { FacebookButton } from '../auth/FacebookButton';

export function LoginHeader() {
  const { lg } = useSize();

  return (
    <>
      <header className="fixed flex flex-row px-2 h-12 items-center w-full gap-1 sm:gap-2 z-50 bg-emerald-700 shadow-md">
        <span
          className="text-lg leading-5 text-white cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 py-3 px-1 rounded-lg"
        >
          Suas Plantas
        </span>
        <Spacer />
        {lg && (
          <FacebookButton />
        )}
        <MoreMenuButton />
      </header>
      <div className="h-12" />
    </>
  );
}
