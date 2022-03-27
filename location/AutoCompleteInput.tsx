import { ChangeEvent, useState } from 'react';
import { AutocompleteOption } from './AutocompleteOption';

interface AutoCompleteInputProps<type> {
  onChange: (value: type) => void;
  getText: (option: type) => string;
  getOptions: (text: string) => Promise<type[]>;
  ketExtractor: (option: type) => number | string;
}

export function AutoCompleteInput<type>({
  getText,
  onChange,
  getOptions,
  ketExtractor,
}: AutoCompleteInputProps<type>) {
  const [options, setOptions] = useState<type[]>([]);
  const [text, setText] = useState<string>('');
  const [focused, setFocused] = useState(false);

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setText(text);
    if (text && text.length) {
      try {
        const options = await getOptions(text);
        setOptions(options);
      } catch (err) {
        console.error(err);
      }
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
    <div className="w-full">
      <div className="group relative">
        <div className="pt-0 relative z-40 group">
          <input
            type="text"
            value={text}
            data-hj-allow
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            placeholder="Pesquisar local"
            className="rounded-full p-2 px-3 shadow-md ring-1 ring-gray-300 select-all"
          />
        </div>
        {focused && !!options.length && (
        <div className="absolute z-30 flex flex-col bg-white group-hocus:text-gray-500 shadow-lg rounded-b-2xl overflow-auto max-h-screen">
          {options?.map((option) => (
            <AutocompleteOption
              value={option as type}
              onSelect={handleSelect}
              key={ketExtractor(option)}
            >
              {getText(option)}
            </AutocompleteOption>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
