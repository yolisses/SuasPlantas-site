import Link from 'next/link';

import { Spacer } from '../common/Spacer';
import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';
import { MeButton } from './MeButton';
import { SearchField } from '../search/SearchField';
import { MoreMenuButton } from './MoreMenuButton';

export function Header() {
  const { reset: resetPlants, setFilters: setPlantsFilters } = usePlants();
  const { reset: resetQuests, setFilters: setQuestsFilters } = useQuests();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      resetPlants();
      setPlantsFilters({});
    }
    if (window.location.pathname === '/quests') {
      resetQuests();
      setQuestsFilters({});
    }
  }

  return (
    <>
      <div className="fixed flex flex-row px-2 h-12 items-center w-full gap-2 z-50 bg-emerald-700 shadow-md">
        <Link href="/">
          <a
            onClick={handleHomeClick}
            className="text-lg text-white cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 p-2 rounded-lg"
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
        <MoreMenuButton />
      </div>
      <div className="h-12" />
    </>
  );
}
