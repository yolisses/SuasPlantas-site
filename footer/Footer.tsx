import { NavItems } from './NavItems';
import { useSize } from '../common/SizeContext';

export function Footer() {
  const { md } = useSize();
  if (md !== false) return null;
  return (
    <>
      <div
        className="h-12 bg-white fixed w-full bottom-0 grid grid-cols-5 border-t border-gray-200"
      >
        <NavItems styleType="footer" />
      </div>
      <div className="h-12 relative" />
    </>
  );
}
