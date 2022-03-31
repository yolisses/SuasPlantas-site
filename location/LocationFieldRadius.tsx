import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface LocationFieldRadiusProps{
    radius?:number
    options: number[]
    setRadius:Dispatch<SetStateAction<number|undefined>>
}

export function LocationFieldRadius({
  radius,
  options,
  setRadius,
}:LocationFieldRadiusProps) {
  function handleChangeRadius(e:ChangeEvent<HTMLSelectElement>) {
    setRadius(parseInt(e.target.value, 10));
  }

  return (
    <div className="center-row px-2 gap-1">
      <span>
        Distância máxima
      </span>
      <select
        defaultChecked
        onChange={handleChangeRadius}
        className="secondary-button text-black bg-transparent"
      >
        {options.map((value) => (
          <option value={value} selected={value === radius}>
            {value}
            {' '}
            Km
          </option>
        ))}
      </select>
    </div>
  );
}
