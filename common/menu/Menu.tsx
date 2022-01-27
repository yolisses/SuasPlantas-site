import {
  ReactNode,
  useEffect,
} from 'react';

interface MenuProps{
  onClose:()=>void
  children:ReactNode
}

export function Menu({
  onClose,
  children,
}:MenuProps) {
  function handleClose() {
    onClose();
  }

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-0 w-screen sm:w-auto max-w-sm px-2 pb-12">
        <div
          style={{ maxHeight: 'calc(100vh - 3.5rem)' }}
          className="bg-white p-2 rounded-lg shadow-md overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
