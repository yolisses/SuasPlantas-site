import Link from 'next/link';
import {
  FaBell,
  FaCommentAlt, FaEnvelope, FaFile, FaHome, FaMap, FaSeedling,
} from 'react-icons/fa';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { LateralNavButton } from '../nav/LateralNavItem';
import { FooterNavButton } from './FooterNavButton';

const navButtons = {
  footer: FooterNavButton,
  lateral: LateralNavButton,
} as const;

type NavStyle = 'footer' | 'lateral'

interface NavItemProps {
  styleType:NavStyle
  selected?:string
  expanded?:boolean
}

export function NavItems({ styleType, selected, expanded }:NavItemProps) {
  const { user } = useUser();

  const NavButton = navButtons[styleType];

  return (
    <>
      <Link href="/">
        <NavButton
          text="Início"
          Icon={FaHome}
          selected
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
