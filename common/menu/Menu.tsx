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
      <div className="relative">
        <div className="absolute right-0 w-screen sm:w-auto max-w-sm px-2">
          <div className="bg-white p-2 rounded-lg shadow-md">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
