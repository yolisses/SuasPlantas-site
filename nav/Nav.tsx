import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavItems } from '../footer/NavItems';
import { NotificationMenuButton } from '../notification/NotificationMenuButton';
import { HomeButton } from './HomeButton';
import { LateralNavButton } from './LateralNavItem';

export function Nav() {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded((value) => !value);
  }

  return (
    <div className="w-72 shadow h-screen overflow-x-hidden flex flex-col">
      <HomeButton />
      <nav className="flex flex-col flex-1 overflow-y-aut w-full overflow-y-auto">
        <NavItems expanded={expanded} />
        <NotificationMenuButton />
        <LateralNavButton
          onClick={handleClick}
          text={expanded ? 'Ver menos' : 'Ver mais'}
          Icon={expanded ? FaChevronDown : FaChevronUp}
        />
      </nav>
    </div>
  );
}
