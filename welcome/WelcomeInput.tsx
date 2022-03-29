import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { NameButton } from './NameButton';

/* eslint-disable jsx-a11y/label-has-associated-control */
interface WelcomeInputProps{
    type:'plants'|'quests'
}

export function WelcomeInput({ type }:WelcomeInputProps) {
  const [names, setNames] = useState<string[]>([]);
  const [text, setText] = useState('');

  function handleChange(e:ChangeEvent<HTMLTextAreaElement>) {
    let newNames = e.target.value.split(/[.,\n]/);

    const last = newNames.pop();
    setText(last || '');

    newNames = newNames
      .map((name:string) => name.trim())
      .filter((name:string) => name && !names.includes(name));
    if (newNames.length) {
      setNames((value) => [...value, ...newNames]);
    }
  }

  function remove(value:string) {
    setNames((names) => names.filter((name) => name !== value));
  }

  return (
    <label
      htmlFor={`field_${type}`}
      className="flex flex-col gap-2"
    >
      <div>
        {type === 'plants'
          ? 'Quais plantas você tem?'
          : 'Quais plantas você está procurando?'}
      </div>
      <div
        className="border-2 border-gray-400 focus-within:border-black w-full p-1 flex flex-row flex-wrap rounded-xl"
      >
        <div className="flex flex-row gap-1 flex-wrap">
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
          id={`field_${type}`}
          value={text}
          onChange={handleChange}
          className="outline-none resize-none items-center w-full p-3"
          placeholder="orquídea, aranto, etc"
        />
      </div>
    </label>
  );
}
