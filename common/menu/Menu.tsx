import {
  ReactNode,
  useEffect,
} from 'react';

interface MenuProps{
  open:boolean
  onClose:()=>void
  children:ReactNode
}

export function Menu({
  open,
  onClose,
  children,
}:MenuProps) {
  useEffect(() => {
    window.addEventListener('click', onClose);
    return () => window.removeEventListener('click', onClose);
  }, []);

  if (open) {
    return (
      <div className="relative">
        <div className="absolute right-0 w-screen sm:w-auto max-w-sm px-2 pb-12">
          <div
            style={{ maxHeight: 'calc(100vh - 3.5rem)' }}
            className="bg-white p-2 rounded-lg shadow-md overflow-y-auto"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
