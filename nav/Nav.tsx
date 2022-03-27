import { NavItems } from '../footer/NavItems';

export function Nav() {
  return (
    <nav className="flex flex-col">
      <NavItems styleContext="header" />
    </nav>
  );
}
