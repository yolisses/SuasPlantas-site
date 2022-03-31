import { ReactNode } from 'react';

interface AutocompleteOptionProps<type> {
  value: type;
  children: ReactNode;
  onSelect: (value: type) => void;
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
    <button className="w-full p-2 highlight text-left" onMouseDown={handleClick}>
      {children}
    </button>
  );
}
