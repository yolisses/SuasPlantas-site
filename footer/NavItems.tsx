import Link from 'next/link';
import {
  FaMap,
  FaBell,
  FaHome,
  FaFile,
  FaEnvelope,
  FaSeedling,
  FaCommentAlt,
} from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { userImage } from '../images/user';
import { useUser } from '../auth/UserContext';
import { FooterNavButton } from './FooterNavButton';
import { LateralNavButton } from '../nav/LateralNavItem';

const navButtons = {
  footer: FooterNavButton,
  lateral: LateralNavButton,
} as const;

interface NavItemProps {
  expanded?:boolean
  styleType:keyof typeof navButtons
}

export function NavItems({ styleType, expanded }:NavItemProps) {
  const { user } = useUser();
  const [selected, setSelected] = useState('');

  const router = useRouter();

  function getActual() {
    const pathToSelected:{[key:string]:string} = {
      map: 'map',
      chat: 'chat',
      contact: 'contact',
      profileKey: 'profile',
      notification: 'notifications',
      'privacy-policy': 'privacy-policy',
    };
    pathToSelected[`users/${user?.id}`] = 'profile';
    pathToSelected[''] = 'home';
    const path = router.asPath.slice(1);
    Object.keys(pathToSelected).some((key) => {
      if (path.startsWith(key)) {
        setSelected(pathToSelected[key]);
        return true;
      }
      return false;
    });
  }

  useEffect(getActual, [router.pathname, user]);

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
      <Link href="/map">
        <NavButton
          text="Mapa"
          Icon={FaMap}
          selected={selected === 'map'}
        />
      </Link>
      <Link href="/notifications">
        <NavButton
          text="Notificações"
          Icon={FaBell}
          selected={selected === 'notifications'}
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
          selected={selected === 'profile'}
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
            selected={selected === 'privacy-policy'}
          />
        </Link>
        <Link href="/contact">
          <NavButton
            text="Contato"
            Icon={FaEnvelope}
            selected={selected === 'contact'}
          />
        </Link>
      </>
      )}
    </>
  );
}
