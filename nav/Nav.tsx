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
      <div className="w-52 shadow" />
      <div className="fixed h-screen z-50 bg-white">
        <nav className="fixed flex w-52 flex-col items-stretch">
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
