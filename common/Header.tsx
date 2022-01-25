import {
  FaBars,
  FaRegFile,
  FaSeedling,
  FaRegCommentAlt,
  FaRegBell,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { userImage } from '../images/user';
import { MeButton } from '../user/MeButton';
import { Spacer } from './Spacer';
import { Menu } from './menu/Menu';
import { usePlants } from '../plant/plantsContext';
import { SearchField } from '../search/SearchField';
import { useTextSearchContext } from '../search/TextSearchContext';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';
import { NotificationItem } from '../notification/NotificationItem';
import { useNotifications } from '../notification/notificationsContext';

export function Header() {
  const { reset: resetPlants, setFilters: setPlantsFilters } = usePlants();
  const { reset: resetQuests, setFilters: setQuestsFilters } = usePlants();
  const { user, logOut } = useUser();
  const { setText } = useTextSearchContext();
  const [menu, setMenu] = useState<string>();
  const { isLogged } = useIsLogged();
  const { items: notifications } = useNotifications();

  function toggleMenu(value:string) {
    setMenu((v) => (v === value ? undefined : value));
  }

  function closeMenu() {
    setMenu(undefined);
  }

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
              setText(undefined);
            }}
          >
            SuasPlantas
          </a>
        </Link>
        <Spacer />
        <div className="hidden md:inline-block flex-1 max-w-sm">
          <SearchField resetButtonColor="white" />
        </div>
        <Spacer />
        <MeButton />
        <button
          className="icon-button"
          onClick={(e) => { toggleMenu('notifications'); e.stopPropagation(); }}
        >
          <FaRegBell size={22} color="white" />
        </button>
        <div className="relative bg-blue-500">
          <div className="h-3 w-3 bg-red-500 -top-4 right-1 rounded-full absolute" />
        </div>
        <button
          className="icon-button"
          onTouchStart={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onClick={(e) => { toggleMenu('more'); e.stopPropagation(); }}
        >
          <FaBars size={22} color="white" />
        </button>
        <div className="relative z-40">
          <div className="h-12" />
          <Menu open={menu === 'notifications'} onClose={closeMenu}>
            {true
              ? [1, 2, 3].map((notification) => (
                <Link href={`/plants/${notification}`}>
                  <a className="menu-button">
                    <div className="aspect-square h-12">
                      <Image width={64} height={64} src={userImage} className="rounded-full" />
                    </div>
                    <div className="w-screen max-w-sm whitespace-normal text-left">
                      Uma nova planta que você pode estar procurando foi adicionada
                    </div>
                  </a>
                </Link>
              ))
              : (<div>coisa</div>)}
          </Menu>
          <Menu open={menu === 'more'} onClose={closeMenu}>
            <a href={`/users/${user?.id}`} className="menu-button" onClick={isLogged}>
              <Image
                width={20}
                height={20}
                src={user?.image || userImage}
                alt={user?.name}
                className="bg-gray-300 rounded-full cursor-pointer"
              />
              Perfil
            </a>
            <a href="/privacy-policy" className="menu-button">
              <FaRegFile size={20} color="gray" />
              Política de privacidade
            </a>
            <a href="/contact" className="menu-button">
              <FaRegCommentAlt size={20} color="gray" />
              Contato
            </a>
            <a href="/about">
              <div className="menu-button">
                <FaSeedling size={20} color="gray" />
                Sobre
              </div>
            </a>
            {!!user && (
            <button className="menu-button" onClick={() => logOut()}>
              <FiLogOut size={20} color="gray" />
              Sair
            </button>
            )}
          </Menu>
        </div>
      </div>
      <div className="h-12" />
    </>

  );
}
