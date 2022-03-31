import { NavItems } from './NavItems';
import { useSize } from '../common/SizeContext';
import { useUser } from '../auth/UserContext';

export function Footer() {
  const { user } = useUser();
  const { md } = useSize();

  if (md !== false || !user) return null;

  return (
    <>
      <div className="h-12 bg-white fixed w-full bottom-0 grid grid-cols-5 border-t border-gray-200">
        <NavItems styleType="footer" />
      </div>
      <div className="h-12 relative" />
    </>
  );
}
