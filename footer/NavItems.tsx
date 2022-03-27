import Link from 'next/link';
import {
  FaBell,
  FaCommentAlt, FaEnvelope, FaFile, FaHome, FaMap, FaSeedling,
} from 'react-icons/fa';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { LateralNavButton } from '../nav/LateralNavItem';

interface NavItemProps {
  selected?:string,
  expanded?:boolean
}

export function NavItems({ selected, expanded }:NavItemProps) {
  const { user } = useUser();

  return (
    <>
      <Link href="/">
        <LateralNavButton
          text="Início"
          Icon={FaHome}
          selected
        />
      </Link>
      <Link href="/notifications">
        <LateralNavButton
          text="Notificações"
          Icon={FaBell}
          selected={selected === 'notifications'}
        />
      </Link>
      <Link href="/map">
        <LateralNavButton
          text="Mapa"
          Icon={FaMap}
          selected={selected === 'map'}
        />
      </Link>
      <Link href="/chat">
        <LateralNavButton
          text="Conversas"
          Icon={FaCommentAlt}
          selected={selected === 'chat'}
        />
      </Link>
      <Link href={user ? `/users/${user.id}` : '/landing'}>
        <LateralNavButton
          text="Perfil"
          selected={selected === 'user'}
          imageSrc={user?.image || userImage}
        />
      </Link>
      {expanded && (
      <>
        <Link href="/about">
          <LateralNavButton
            text="Sobre"
            Icon={FaSeedling}
          />
        </Link>
        <Link href="/privacy-policy">
          <LateralNavButton
            text="Política de privacidade"
            Icon={FaFile}
            selected={selected === 'map'}
          />
        </Link>
        <Link href="/contact">
          <LateralNavButton
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
