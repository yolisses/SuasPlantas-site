import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SessionProps {
  label?: string;
  children: ReactNode;
}

export function Session({ label, children }: SessionProps) {
  return (
    <section>
      {!!label && (
        <div className="flex flex-row items-center mb-0.5">
          <FaChevronDown className="mr-1" color="#bbb" size={12} />
          <div>{label}</div>
        </div>
      )}
      {children}
    </section>
  );
}
