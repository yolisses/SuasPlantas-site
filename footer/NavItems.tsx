import Link from 'next/link';
import {
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
          text="início"
          Icon={FaHome}
          selected
        />
      </Link>
      <Link href="/map">
        <LateralNavButton
          text="mapa"
          Icon={FaMap}
          selected={selected === 'map'}
        />
      </Link>
      <Link href="/chat">
        <LateralNavButton
          text="conversas"
          Icon={FaCommentAlt}
          selected={selected === 'chat'}
        />
      </Link>
      <Link href={user ? `/users/${user.id}` : '/landing'}>
        <LateralNavButton
          text="perfil"
          selected={selected === 'user'}
          imageSrc={user?.image || userImage}
        />
      </Link>
      {expanded && (
      <>
        <Link href="/about">
          <LateralNavButton
            text="sobre"
            Icon={FaSeedling}
          />
        </Link>
        <Link href="/privacy-policy">
          <LateralNavButton
            text="política de privacidade"
            Icon={FaFile}
            selected={selected === 'map'}
          />
        </Link>
        <Link href="/contact">
          <LateralNavButton
            text="contato"
            Icon={FaEnvelope}
            selected={selected === 'map'}
          />
        </Link>
      </>
      )}
    </>
  );
}
