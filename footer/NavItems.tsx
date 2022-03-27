import Link from 'next/link';
import {
  FaCommentAlt, FaHome, FaMap, FaUser,
} from 'react-icons/fa';
import { useUser } from '../auth/userContext';
import { NavButton } from './NavButton';

export function NavItems() {
  const { user } = useUser();

  return (
    <>
      <Link href="/">
        <NavButton Icon={FaHome} text="início" />
      </Link>
      <Link href="/map">
        <NavButton Icon={FaMap} text="mapa" />
      </Link>
      <Link href="/chat">
        <NavButton Icon={FaCommentAlt} text="conversas" />
      </Link>
      <Link href={user ? `/users/${user.id}` : '/landing'}>
        <NavButton Icon={FaUser} text="perfil" />
      </Link>
    </>
  );
}
