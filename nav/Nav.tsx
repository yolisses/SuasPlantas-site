import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HomeButton } from './HomeButton';
import { NavItems } from '../footer/NavItems';
import { LateralNavButton } from './LateralNavItem';

export function Nav() {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded((value) => !value);
  }

  return (
    <>
      <div className="relative">
        <nav
          style={{ boxShadow: '0 0 4px #0005' }}
          className="fixed flex w-52 flex-col items-stretch h-screen bg-white"
        >
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
