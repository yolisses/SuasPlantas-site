import Link from 'next/link';
import {
  FaCommentAlt, FaHome, FaMap,
} from 'react-icons/fa';
import { NavButton } from './NavButton';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
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
          styleContext={styleContext}
          selected={selected === 'user'}
          imageSrc={user?.image || userImage}
        />
      </Link>
    </>
  );
}
