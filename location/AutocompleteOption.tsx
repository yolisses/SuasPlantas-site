import { ReactNode } from "react";

interface AutocompleteOptionProps<type> {
  value: type;
  onSelect: (value: type) => void;
  children: ReactNode;
}

export function AutocompleteOption<type>({
  value,
  children,
  onSelect,
}: AutocompleteOptionProps<type>) {
  function handleClick() {
    onSelect(value);
  }

  return (
    <div className="w-full p-2" onMouseDown={handleClick}>
      {children}
    </div>
  );
}
