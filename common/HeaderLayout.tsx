import { ReactNode } from "react";
import { GoBackButton } from "./GoBackButton";

interface HeaderLayoutProps {
  goBackButton?: boolean;
  className?: string;
  children?: ReactNode;
}

export function HeaderLayout({
  children,
  className,
  goBackButton = true,
}: HeaderLayoutProps) {
  return (
    <>
      <div
        className={
          "fixed flex flex-row h-12 items-center w-full gap-2 px-2 z-50 bg-white " +
          (className || "")
        }
      >
        {goBackButton && <GoBackButton />}
        {children}
      </div>
      <div className="h-12" />
    </>
  );
}
