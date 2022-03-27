import Link from 'next/link';

import { Spacer } from '../common/Spacer';
import { NavItems } from '../footer/NavItems';
import { useSize } from '../common/SizeContext';
import { MoreMenuButton } from './MoreMenuButton';
import { usePlants } from '../plant/plantsContext';
import { SearchField } from '../search/SearchField';
import { NotificationMenuButton } from '../notification/NotificationMenuButton';

export function Header() {
  const { setFilters: setPlantsFilters } = usePlants();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      setPlantsFilters({});
    }
  }

  const { md } = useSize();

  return (
    <>
      <header className="fixed bg-emerald-700 text-white flex flex-row px-2 h-12 items-center w-full z-50">
        <Link href="/">
          <a
            onClick={handleHomeClick}
            className="secondary-button text-white h-12 text-lg"
          >
            Suas Plantas
          </a>
        </Link>
        <div className="w-full max-w-sm hidden md:inline-flex px-2">
          <SearchField resetButtonColor="#fff" />
        </div>
        <Spacer />
        {md && <NavItems styleContext="header" />}
        <NotificationMenuButton />
        <MoreMenuButton />
      </header>
      <div className="h-12" />
    </>
  );
}
