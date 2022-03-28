import Link from 'next/link';
import {
  FaBell,
  FaCommentAlt, FaEnvelope, FaFile, FaHome, FaMap, FaSeedling,
} from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import path from 'path';
import { route } from 'next/dist/server/router';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { FooterNavButton } from './FooterNavButton';
import { LateralNavButton } from '../nav/LateralNavItem';

const navButtons = {
  footer: FooterNavButton,
  lateral: LateralNavButton,
} as const;

type NavStyle = 'footer' | 'lateral'

interface NavItemProps {
  expanded?:boolean
  styleType:NavStyle
}

const pathToSelected = {
  '': 'home',
  user: 'user',
  notification: 'notifications',
  map: 'map',
  chat: 'chats',
};

export function NavItems({ styleType, expanded }:NavItemProps) {
  const { user } = useUser();
  const [selected, setSelected] = useState('');

  const router = useRouter();

  function getActual() {
    const path = router.pathname.slice(1);
    for (const key in pathToSelected) {
      if (path.startsWith(key)) {
        setSelected(pathToSelected[key]);
      }
    }
  }

  useEffect(getActual, [router.pathname]);

  const NavButton = navButtons[styleType];

  return (
    <>
      <Link href="/">
        <NavButton
          text="Início"
          Icon={FaHome}
          selected={selected === 'home'}
        />
      </Link>
      <Link href="/notifications">
        <NavButton
          text="Notificações"
          Icon={FaBell}
          selected={selected === 'notifications'}
        />
      </Link>
      <Link href="/map">
        <NavButton
          text="Mapa"
          Icon={FaMap}
          selected={selected === 'map'}
        />
      </Link>
      <Link href="/chat">
        <NavButton
          text="Conversas"
          Icon={FaCommentAlt}
          selected={selected === 'chat'}
        />
      </Link>
      <Link href={user ? `/users/${user.id}` : '/landing'}>
        <NavButton
          text="Perfil"
          selected={selected === 'user'}
          imageSrc={user?.image || userImage}
        />
      </Link>
      {expanded && (
      <>
        <Link href="/about">
          <NavButton
            text="Sobre"
            Icon={FaSeedling}
          />
        </Link>
        <Link href="/privacy-policy">
          <NavButton
            text="Política de privacidade"
            Icon={FaFile}
            selected={selected === 'map'}
          />
        </Link>
        <Link href="/contact">
          <NavButton
            text="Contato"
            Icon={FaEnvelope}
            selected={selected === 'map'}
          />
        </Link>
      </>
      )}
    </>
  );
}
