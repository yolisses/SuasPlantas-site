interface AutocompleteOptionProps<type> extends HTMLDivElement {
  value: type;
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
    <div className="w-full p-2" onClick={handleClick}>
      {children}
    </div>
  );
}
