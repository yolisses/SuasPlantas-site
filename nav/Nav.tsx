import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HomeButton } from './HomeButton';
import { NavItems } from '../footer/NavItems';
import { useUser } from '../auth/UserContext';
import { useSize } from '../common/SizeContext';
import { LateralNavButton } from './LateralNavItem';

export function Nav() {
  const { md } = useSize();
  const { user } = useUser();
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded((value) => !value);
  }

  if (md !== true || !user) return null;

  return (
    <>
      <div className="relative">
        <nav className="fixed flex w-52 flex-col items-stretch h-screen border-r border-gray-200">
          <HomeButton />
          <NavItems expanded={expanded} styleType="lateral" />
          <LateralNavButton
            onClick={handleClick}
            text={expanded ? 'Ver menos' : 'Ver mais'}
            Icon={expanded ? FaChevronUp : FaChevronDown}
          />
        </nav>
      </div>
      <div className="w-52" />
    </>
  );
}
