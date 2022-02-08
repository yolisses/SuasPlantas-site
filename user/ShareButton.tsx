import { FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';
import { ShareButtons } from '../share/ShareButtons';

export function ShareButton() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1 pb-1">
        {active
      && <ShareButtons shareUrl="suasplantas.com" socialIconProps={{ size: 50, borderRadius: 1000 }} />}
      </div>
      <button className="fab" onClick={() => setActive((value:boolean) => !value)}>
        <FaShareAlt size={24} color="white" />
      </button>
    </>
  );
}
