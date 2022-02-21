import Link from 'next/link';

import {
  FaBars, FaEnvelope, FaFile, FaSeedling,
} from 'react-icons/fa';
import { useState } from 'react';
import { RiLoginBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { Spacer } from '../common/Spacer';
import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';
import { MeButton } from '../user/MeButton';
import { SearchField } from '../search/SearchField';
import { Menu } from '../common/menu/Menu';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';

export function Header() {
  const { reset: resetPlants, setFilters: setPlantsFilters } = usePlants();
  const { reset: resetQuests, setFilters: setQuestsFilters } = useQuests();

  const [menu, setMenu] = useState<string|null>(null);
  const { user, logOut } = useUser();

  const { isLogged } = useIsLogged();

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
        <div>
          <button className="icon-button" onClick={() => { setMenu('more'); }}>
            <FaBars color="#fff" size={25} />
          </button>
          {(menu === 'more') && (
          <Menu onClose={() => { setMenu(null); }}>
            <Link href="/about">
              <a className="menu-button" onClick={() => setMenu(null)}>
                <FaSeedling size={18} color="gray" />
                {' '}
                Sobre
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a className="menu-button" onClick={() => setMenu(null)}>
                <FaFile size={18} color="gray" />
                {' '}
                Política de privacidade
              </a>
            </Link>
            <Link href="/contact">
              <a className="menu-button" onClick={() => setMenu(null)}>
                <FaEnvelope size={18} color="gray" />
                {' '}
                Contato
              </a>
            </Link>
            {user ? (
              <button className="menu-button" onClick={() => { logOut(); setMenu(null); }}>
                <RiLogoutBoxRLine size={20} color="gray" />
                {' '}
                Sair
              </button>
            ) : (
              <button className="menu-button" onClick={() => { isLogged(); setMenu(null); }}>
                <RiLoginBoxLine size={20} color="gray" onClick={isLogged} />
                {' '}
                Entrar
              </button>
            )}
          </Menu>
          )}
        </div>

      </div>
      <div className="h-12" />
    </>
  );
}
