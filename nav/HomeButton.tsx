import Image from 'next/image';
import Link from 'next/link';
import { usePlants } from '../plant/plantsContext';

export function HomeButton() {
  const { setFilters: setPlantsFilters } = usePlants();

  function handleHomeClick() {
    if (window.location.pathname === '/') {
      setPlantsFilters({});
    }
  }

  const imageSize = 24;

  return (
    <Link href="/">
      <a
        onClick={handleHomeClick}
        className="secondary-button text-black h-12 text-lg justify-start"
      >
        <Image src="/icon/icon.svg" width={imageSize} height={imageSize} />
        SuasPlantas
      </a>
    </Link>
  );
}
