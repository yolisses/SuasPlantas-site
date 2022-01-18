import { ReactNode, useEffect } from 'react';

interface MenuProps{
  children:ReactNode
  open:boolean
  onClose:()=>void
}

export function Menu({ children, open, onClose }:MenuProps) {
  useEffect(() => {
    window.addEventListener('click', onClose);
    return () => window.removeEventListener('click', onClose);
  }, []);

  if (open) {
    return (
      <div className="relative right-0">
        <div className="absolute right-0 bg-white p-2 rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    );
  }

  return null;
}
