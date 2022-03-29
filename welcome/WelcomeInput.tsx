import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
            <span className="bg-gray-300 pl-1 rounded-full h-8 center" style={{ animation: 'rollout 0.05s' }}>
              {name}
              <button className="icon-button p-2">
                <FaTimes color="white" size={16} />
              </button>
            </span>
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
