import { ReactNode } from 'react';

interface HeaderLayoutProps {
  className?: string;
  children?: ReactNode;
}

export function HeaderLayout({
  children,
  className,
}: HeaderLayoutProps) {
  return (
    <>
      <div
        className={
          `fixed flex flex-row h-12 items-center w-full gap-2 px-2 z-50 bg-white shadow-md ${
            className || ''}`
        }
      >
        {children}
      </div>
      <div className="h-12" />
    </>
  );
}
