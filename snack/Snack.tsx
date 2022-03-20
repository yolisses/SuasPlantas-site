/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import style from './Snack.module.css';
import { useSnack } from './SnackContext';

export interface ISnack{
  severity:'error'|'success'
  text:string
}

export function Snack({ snack }:{ snack:ISnack}) {
  const { close } = useSnack();

  function handleClickOutside() {
    close();
  }

  function handleEsc(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      close();
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      style={{ zIndex: 70 }}
      onClick={(e) => e.stopPropagation()}
      className={`fixed bottom-5 left-5 right-5 md:right-auto max-w-sm ${style.rollout}`}
    >
      <div className={`p-3 text-white rounded-lg flex flex-row gap-2 items-center shadow-lg ${
        {
          success: 'bg-green-600',
          error: 'bg-red-700',
        }[snack.severity]}`}
      >
        {{
          success: <FaRegCheckCircle />,
          error: <FaRegTimesCircle />,
        }[snack.severity]}
        {snack.text}
      </div>
    </div>
  );
}
