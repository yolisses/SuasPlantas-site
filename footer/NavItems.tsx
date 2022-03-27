import Link from 'next/link';
import {
  FaCommentAlt, FaHome, FaMap, FaUser,
} from 'react-icons/fa';
import { useUser } from '../auth/userContext';
import { NavButton } from './NavButton';
import { StyleContext } from './styleContext';

interface NavItemProps {
  selected?:string,
  styleContext:StyleContext
}

export function NavItems({ selected, styleContext }:NavItemProps) {
  const { user } = useUser();

  return (
    <>
      <Link href="/">
        <NavButton
          text="início"
          Icon={FaHome}
          styleContext={styleContext}
          selected={selected === 'home'}
        />
      </Link>
      <Link href="/map">
        <NavButton
          text="mapa"
          Icon={FaMap}
          styleContext={styleContext}
          selected={selected === 'map'}
        />
      </Link>
      <Link href="/chat">
        <NavButton
          text="conversas"
          Icon={FaCommentAlt}
          styleContext={styleContext}
          selected={selected === 'chat'}
        />
      </Link>
      <Link href={user ? `/users/${user.id}` : '/landing'}>
        <NavButton
          text="perfil"
          Icon={FaUser}
          styleContext={styleContext}
          selected={selected === 'profile'}
        />
      </Link>
    </>
  );
}
