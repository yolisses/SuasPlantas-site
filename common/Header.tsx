import {
  FaBars,
  FaRegFile,
  FaSeedling,
  FaRegCommentAlt,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { logOut } from '../user/logOut';
import { userImage } from '../images/user';
import { MeButton } from '../user/MeButton';
import { authStore } from '../auth/authStore';
import { HeaderLayout } from './HeaderLayout';
import { useItems } from '../pagination/ItemsContext';
import { Spacer } from './Spacer';
import { Menu } from './menu/Menu';
import { RequireLogin } from '../auth/RequireLogin';

export function Header() {
  const { reset, setFilters } = useItems();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderLayout className="bg-emerald-700 text-white shadow-md">
      <Link href="/">
        <a>
          <div
            className="text-lg cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 p-2 rounded-lg"
            onClick={() => {
              if (window.location.pathname === '/') {
                reset();
                setFilters({});
              }
            }}
          >
            SuasPlantas
          </div>
        </a>
      </Link>
      <Spacer />
      <MeButton />
      <div>
        <button
          className="icon-button"
          onClick={(e) => { setMenuOpen(true); e.stopPropagation(); }}
        >
          <FaBars size={22} color="white" />
        </button>
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)}>
          <RequireLogin>
            <a href={`/users/${authStore.user?.id}`} className="menu-button">
              <Image
                width={20}
                height={20}
                src={authStore.user?.image || userImage}
                alt={authStore.user?.name}
                className="bg-gray-300 rounded-full cursor-pointer"
              />
              Perfil
            </a>
          </RequireLogin>
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
          {!!authStore.user && (
            <button className="menu-button" onClick={() => logOut()}>
              <FiLogOut size={20} color="gray" />
              Sair
            </button>
          )}
        </Menu>
      </div>
    </HeaderLayout>
  );
}
