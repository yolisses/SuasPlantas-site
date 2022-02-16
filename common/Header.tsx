import Link from 'next/link';

import { Spacer } from './Spacer';
import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';

export function Header() {
  const { reset: resetPlants, setFilters: setPlantsFilters } = usePlants();
  const { reset: resetQuests, setFilters: setQuestsFilters } = useQuests();
  return (
    <>
      <div className="fixed flex flex-row pl-2 h-12 items-center w-full gap-2 z-50 bg-emerald-700 shadow-md">
        <Link href="/">
          <a
            className="text-lg text-white cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 p-2 rounded-lg"
            onClick={() => {
              if (window.location.pathname === '/') {
                resetPlants();
                setPlantsFilters({});
              }
              if (window.location.pathname === '/quests') {
                resetQuests();
                setQuestsFilters({});
              }
            }}
          >
            Suas Plantas
          </a>
        </Link>
      </div>
      <div className="h-12" />
    </>
  );
}
