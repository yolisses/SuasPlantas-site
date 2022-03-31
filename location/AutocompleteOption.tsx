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
    <div className="w-full p-2" onMouseDown={handleClick}>
      {children}
    </div>
  );
}
