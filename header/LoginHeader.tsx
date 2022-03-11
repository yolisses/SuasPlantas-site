import { useRouter } from 'next/router';
import { Spacer } from '../common/Spacer';
import { useSize } from '../size/SizeContext';
import { MoreMenuButton } from './MoreMenuButton';
import { usePlants } from '../plant/plantsContext';
import { FacebookButton } from '../auth/FacebookButton';

const hideHeader = {
  '/landing': true,
} as {[key:string]:true};

export function LoginHeader() {
  const { setFilters: setPlantsFilters } = usePlants();

  const { asPath } = useRouter();

  const { lg } = useSize();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      setPlantsFilters({});
    }
  }

  if (hideHeader[asPath]) return null;

  return (
    <>
      <header className="fixed flex flex-row px-2 h-12 items-center w-full gap-1 sm:gap-2 z-50 bg-emerald-700 shadow-md">
        <span
          onClick={handleHomeClick}
          className="text-lg leading-5 text-white cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 p-2 rounded-lg"
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
