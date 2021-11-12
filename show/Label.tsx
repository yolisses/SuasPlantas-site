import { FaChevronDown } from "react-icons/fa";

interface LabelProps {
  text: string;
}

export function Label({ text }: LabelProps) {
  return (
    <div className="flex flex-row items-center">
      <FaChevronDown />
      <div>{text}</div>
    </div>
  );
}
