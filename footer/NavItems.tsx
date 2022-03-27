import Link from 'next/link';
import {
  FaCommentAlt, FaHome, FaMap,
} from 'react-icons/fa';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { StyleContext } from './styleContext';
import { LateralNavButton } from '../nav/LateralNavItem';

interface NavItemProps {
  selected?:string,
  styleContext:StyleContext
}

export function NavItems({ selected, styleContext }:NavItemProps) {
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
    </>
  );
}
