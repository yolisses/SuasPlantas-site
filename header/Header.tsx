import { Spacer } from '../common/Spacer';
import { MoreMenuButton } from './MoreMenuButton';
import { NotificationMenuButton } from '../notification/NotificationMenuButton';

export function Header() {
  return (
    <>
      <header className="fixed bg-emerald-700 text-white flex flex-row px-2 h-12 items-center w-full z-50">
        <Spacer />
      </header>
      <div className="h-12" />
    </>
  );
}
