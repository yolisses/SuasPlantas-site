import { useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

import { Modal } from '../modal/Modal';
import { useModal } from '../modal/ModalContext';
import { interact } from '../interactions/interact';
import { FeedbackBox } from '../content/FeedbackBox';

const MIN_TIME_IN_SITE = 5000; // 5 seconds

export function ExitIntent() {
  const { setModal } = useModal();

  function handleClose() {
    interact({ type: 'exit intent', modalType: 'feedback', action: 'close' });
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
      if (!exitModalClosed) {
        interact({ type: 'exit intent', modalType: 'feedback', action: 'open' });
        setModal(
          <Modal closeOnClickOut={false} onClose={handleClose}>
            <div className="px-2">
              <h2 className="text-lg">Poderia nos contar o que achou do site?</h2>
              <div>Sua opinião é muito importante para nós</div>
              <FeedbackBox source="exit intent modal" />
            </div>
          </Modal>,
        );
      }
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
