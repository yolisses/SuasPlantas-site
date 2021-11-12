import { ReactElement } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SessionProps {
  label?: string;
  children: ReactElement;
}

export function Session({ label, children }: SessionProps) {
  return (
    <div>
      {!!label && (
        <div className="flex flex-row items-center mb-0.5">
          <FaChevronDown className="mr-1" />
          <div>{label}</div>
        </div>
      )}
      {children}
    </div>
  );
}
