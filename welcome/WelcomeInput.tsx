import { ChangeEvent, useState } from 'react';
import { NameButton } from './NameButton';

/* eslint-disable jsx-a11y/label-has-associated-control */
interface WelcomeInputProps{
    type:'plants'|'quests'
}

export function WelcomeInput({ type }:WelcomeInputProps) {
  const [names, setNames] = useState<string[]>([]);
  const [text, setText] = useState('');

  function separateWords(text:string) {
    return text.split(/[.,\n]/);
  }

  function addNames(newNames:string[]) {
    const filteredNames = newNames
      .map((name:string) => name.trim())
      .filter((name:string) => name && !names.includes(name));
    if (filteredNames.length) {
      setNames((value) => [...value, ...filteredNames]);
    }
  }

  function remove(value:string) {
    setNames((names) => names.filter((name) => name !== value));
  }

  function handleChange(e:ChangeEvent<HTMLTextAreaElement>) {
    const newNames = separateWords(e.target.value);

    const last = newNames.pop();
    setText(last || '');
    addNames(newNames);
  }

  function handleBlur() {
    const newNames = separateWords(text);
    setText('');
    addNames(newNames);
  }

  return (
    <label
      htmlFor={`field_${type}`}
      className="flex flex-col gap-2"
    >
      {type === 'plants'
        ? (
          <span>
            Quais plantas você
            {' '}
            <strong>tem</strong>
            ?
          </span>
        )
        : (
          <span>
            Quais plantas você está
            {' '}
            <strong>procurando</strong>
            ?
          </span>
        )}
      <div
        className="border-2 border-gray-400 focus-within:border-black w-full p-1 flex flex-row flex-wrap rounded-xl"
      >
        <div className="flex flex-row gap-1 flex-wrap overflow-hidden">
          {names.map((name) => (
            <NameButton
              key={name}
              text={name}
              remove={remove}
            />
          ))}
        </div>
        <textarea
          rows={1}
          value={text}
          data-hj-allow
          onBlur={handleBlur}
          id={`field_${type}`}
          onChange={handleChange}
          placeholder="orquídea, aranto, etc"
          className="outline-none resize-none items-center w-full p-3"
        />
      </div>
    </label>
  );
}
