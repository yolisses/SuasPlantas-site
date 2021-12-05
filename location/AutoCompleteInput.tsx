import { ChangeEvent, useState } from "react";
import { AutocompleteOption } from "./AutocompleteOption";

interface AutoCompleteInputProps<type> {
  getOptions: (text: string) => Promise<type[]>;
  ketExtractor: (option: type) => number | string;
  getText: (option: type) => string;
  onChange: (value: type) => void;
}

export function AutoCompleteInput<type>({
  ketExtractor,
  getOptions,
  getText,
  onChange,
}: AutoCompleteInputProps<type>) {
  const [options, setOptions] = useState<type[]>([]);
  const [text, setText] = useState<string>("");
  const [focused, setFocused] = useState(false);

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setText(text);
    if (text && text.length)
      try {
        const options = await getOptions(text);
        setOptions(options);
      } catch (err) {
        console.error(err);
      }
  }

  function handleSelect(value: type) {
    setText(getText(value));
    setFocused(false);
    onChange(value);
  }

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  return (
    <div className="group">
      <div className="pt-0 relative z-40 group">
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Pesquisar local"
          onChange={handleChange}
          value={text}
          className="rounded-full p-2 px-3 shadow-lg ring-1 ring-gray-300"
        />
      </div>
      {focused && !!options.length && (
        <div className="absolute z-30 w-full flex bg-white group-hocus:text-gray-500 shadow-lg rounded-b-2xl overflow-scroll max-h-screen">
          {options?.map((option) => (
            <AutocompleteOption
              value={option as type}
              key={ketExtractor(option)}
              onSelect={handleSelect}
            >
              {getText(option)}
            </AutocompleteOption>
          ))}
        </div>
      )}
    </div>
  );
}
