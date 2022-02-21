import Link from 'next/link';
import {
  FaBars,
  FaFile,
  FaSeedling,
  FaEnvelope,
} from 'react-icons/fa';
import {
  RiLoginBoxLine,
  RiLogoutBoxRLine,
} from 'react-icons/ri';
import { useState } from 'react';
import { Menu } from '../common/menu/Menu';
import { useUser } from '../auth/userContext';
import { useIsLogged } from '../auth/useIsLogged';

export function MoreMenuButton() {
  const [menu, setMenu] = useState<string|null>(null);
  const { user, logOut } = useUser();

  const { isLogged } = useIsLogged();

  return (
    <div>
      <button className="icon-button" onClick={() => { setMenu('more'); }}>
        <FaBars color="#fff" size={25} />
      </button>
      <div className="fixed right-0 sm:right-2">
        <div className="absolute right-0">
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
    </div>
  );
}
