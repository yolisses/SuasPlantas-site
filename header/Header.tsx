import Link from 'next/link';

import { Spacer } from '../common/Spacer';
import { MoreMenuButton } from './MoreMenuButton';
import { usePlants } from '../plant/plantsContext';
import { SearchField } from '../search/SearchField';
import { NotificationMenuButton } from '../notification/NotificationMenuButton';
import { navigationItems } from '../footer/NavigationItems';
import { HeaderNavigationItem } from './HeaderNavigationItem';
import { useSize } from '../common/SizeContext';

export function Header() {
  const { setFilters: setPlantsFilters } = usePlants();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      setPlantsFilters({});
    }
  }

  const { lg } = useSize();

  return (
    <>
      <header className="fixed bg-emerald-700 text-white flex flex-row px-2 h-12 items-center w-full gap-4 sm:gap-2 z-50 shadow-md">
        <Link href="/">
          <a
            onClick={handleHomeClick}
            className="secondary-button text-white p-1 text-lg"
          >
            Suas Plantas
          </a>
        </Link>
        <div className="w-full max-w-sm hidden sm:inline-flex">
          <SearchField resetButtonColor="#fff" />
        </div>
        <Spacer />
        {lg && navigationItems.map((item) => <HeaderNavigationItem item={item} />)}
        <NotificationMenuButton />
        <MoreMenuButton />
      </header>
      <div className="h-12" />
    </>
  );
}
