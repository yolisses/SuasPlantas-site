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
    <div
      className={
        "flex flex-row h-14 items-center w-full gap-2 px-2 " + (className || "")
      }
    >
      {goBackButton && <GoBackButton />}
      {children}
    </div>
  );
}
