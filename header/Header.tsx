import Link from 'next/link';

import { useRouter } from 'next/router';
import { MeButton } from './MeButton';
import { Spacer } from '../common/Spacer';
import { ChatButton } from './ChatButton';
import { MoreMenuButton } from './MoreMenuButton';
import { usePlants } from '../plant/plantsContext';
import { SearchField } from '../search/SearchField';
import { NotificationMenuButton } from '../notification/NotificationMenuButton';

const hideHeader = {
  '/landing': true,
};

export function Header() {
  const { setFilters: setPlantsFilters } = usePlants();
  const { asPath } = useRouter();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      setPlantsFilters({});
    }
  }

  if (hideHeader[asPath]) return null;

  return (
    <>
      <div className="fixed flex flex-row px-2 h-12 items-center w-full gap-1 sm:gap-2 z-50 bg-emerald-700 shadow-md">
        <Link href="/">
          <a
            onClick={handleHomeClick}
            className="text-lg leading-5 text-white cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 p-2 rounded-lg"
          >
            Suas Plantas
          </a>
        </Link>
        <Spacer />
        <div className="w-full max-w-sm hidden sm:inline-flex">
          <SearchField resetButtonColor="#fff" />
        </div>
        <Spacer />
        <MeButton />
        <ChatButton />
        <NotificationMenuButton />
        <MoreMenuButton />
      </div>
      <div className="h-12" />
    </>
  );
}
