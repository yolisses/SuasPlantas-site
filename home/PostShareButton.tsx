import { MouseEvent, useEffect, useState } from 'react';
import { FaShare } from 'react-icons/fa';
import { gray400, green500 } from '../common/colors';
import { ShareButtons } from '../common/ShareButtons';

interface PostShareButtonProps{
    id:number
}

export function PostShareButton({ id }:PostShareButtonProps) {
  const [open, setOpen] = useState(false);

  function handleClickOut() {
    setOpen(false);
    window.removeEventListener('click', handleClickOut);
  }

  function handleShareButton(e:MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setOpen((value) => !value);
    window.addEventListener('click', handleClickOut);
  }

  useEffect(() => () => window.removeEventListener('click', handleClickOut), []);

  return (
    <div className="relative">
      {open && (
      <div className="bg-white center-row gap-1 p-2 rounded-xl shadow-lg absolute -right-1 -top-10">
        <ShareButtons
          reverse
          socialIconProps={{ size: 36, borderRadius: 100 }}
          shareUrl={`https://suasplantas.com/plants/${id}`}
        />
      </div>
      )}
      <button
        className="icon-button"
        onClick={handleShareButton}
      >
        <FaShare size={20} color={open ? green500 : gray400} />
      </button>
    </div>
  );
}
