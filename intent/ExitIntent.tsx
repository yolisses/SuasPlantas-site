import { parseCookies, setCookie } from 'nookies';
import { useEffect } from 'react';
import { SignInBox } from '../auth/SignInBox';
import { FeedbackModal } from '../documents/FeedBackModal';
import { useModal } from '../modal/ModalContext';

const MIN_TIME_IN_SITE = 5000; // 5 seconds

export function ExitIntent() {
  const { setModal } = useModal();

  function onClose() {
    setCookie(undefined, 'exit-modal-closed', 'true', {
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
    });
  }

  function handleMouseOut(e:MouseEvent) {
    if (!(e as any).toElement // Chrome only
        && !e.relatedTarget
        && e.clientY < 10) {
      const cookies = parseCookies(undefined);
      const exitModalClosed = cookies['exit-modal-closed'];
      if (exitModalClosed) return;
      setModal(<FeedbackModal />, onClose);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('mouseout', handleMouseOut);
    }, MIN_TIME_IN_SITE);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return null;
}
