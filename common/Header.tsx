/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

import { Spacer } from './Spacer';
import { Menu } from './menu/Menu';
import { userImage } from '../images/user';
import { MeButton } from '../user/MeButton';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';
import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';
import { SearchField } from '../search/SearchField';
import { useTextSearchContext } from '../search/TextSearchContext';
import { NotificationsMenu } from '../notification/NotificationsMenu';
import { useNotifications } from '../notification/notificationsContext';
import { NotificationsToggleWarn } from '../notification/NotificationsToggleWarn';
import { usePreview } from '../preview/PreviewContext';

export function Header() {
  const { reset: resetPlants, setFilters: setPlantsFilters } = usePlants();
  const { reset: resetQuests, setFilters: setQuestsFilters } = useQuests();
  const { user, logOut } = useUser();
  const { user: previewUser } = usePreview();
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
            Suas Plantas
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
          onClick={(e) => {
            e.stopPropagation();
            if (isLogged()) {
              toggleMenu('notifications');
            }
          }}
        >
          <FaRegBell size={22} color="white" />
        </button>
        {(notifications && notifications[0]?.viewed === false) && (
        <div className="relative bg-blue-500">
          <div className="h-3 w-3 bg-green-500 -top-4 right-1 rounded-full absolute" />
        </div>
        )}
        <button
          className="icon-button"
          onClick={(e) => { e.stopPropagation(); toggleMenu('more'); }}
        >
          <FaBars size={22} color="white" />
        </button>
        <div className="relative z-40">
          <div className="h-12" />
          {menu === 'notifications'
          && (
          <Menu onClose={closeMenu}>
            <NotificationsToggleWarn />
            <NotificationsMenu closeMenu={closeMenu} />
          </Menu>
          )}
          {menu === 'more'
&& (
<Menu onClose={closeMenu}>
  <Link href={`/users/${previewUser?.id || user?.id}`} prefetch={false}>
    <a className="menu-button" onClick={() => { isLogged(); closeMenu(); }}>
      <Image
        width={20}
        height={20}
        src={user?.image || userImage}
        alt={user?.name}
        className="bg-gray-300 rounded-full cursor-pointer"
      />
      Perfil
    </a>
  </Link>
  <Link href="/privacy-policy" prefetch={false}>
    <a className="menu-button" onClick={closeMenu}>
      <FaRegFile size={20} color="gray" />
      Política de privacidade
    </a>
  </Link>
  <Link href="/contact" prefetch={false}>
    <a className="menu-button" onClick={closeMenu}>
      <FaRegCommentAlt size={20} color="gray" />
      Contato
    </a>
  </Link>
  <Link href="/about" prefetch={false}>
    <a className="menu-button" onClick={closeMenu}>
      <FaSeedling size={20} color="gray" />
      Sobre
    </a>
  </Link>
  {!!user && (
  <button className="menu-button" onClick={() => { logOut(); closeMenu(); }}>
    <FiLogOut size={20} color="gray" />
    Sair
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
