import Link from 'next/link';
import { usePlants } from '../plant/plantsContext';

export function HomeButton() {
  const { setFilters: setPlantsFilters } = usePlants();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      setPlantsFilters({});
    }
  }

  return (
    <Link href="/">
      <a
        onClick={handleHomeClick}
        className="secondary-button h-12 text-lg"
      >
        Suas Plantas
      </a>
    </Link>
  );
}
