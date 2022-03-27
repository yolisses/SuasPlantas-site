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
      <div className="w-72" />
      <div className="w-72 fixed h-screen z-50 bg-white" style={{ boxShadow: '0 0 4px #0003' }}>
        <nav className="flex w-72 flex-col items-stretch fixed top-0">
          <HomeButton />
          <NavItems expanded={expanded} />
          <LateralNavButton
            onClick={handleClick}
            text={expanded ? 'Ver menos' : 'Ver mais'}
            Icon={expanded ? FaChevronDown : FaChevronUp}
          />
        </nav>
      </div>

    </>
  );
}
