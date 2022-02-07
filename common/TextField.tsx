import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface CustomProps{
    label?:string
}

type TextFieldProps = CustomProps&
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function TextField({ label, ...rest }:TextFieldProps) {
  return (
    <label className="cursor-text">
      <div
        className="relative ring-1 ring-gray-300 rounded-lg py-4 px-3 mt-1 hover:ring-black focus-within:ring-green-500 hover:focus-within:ring-green-500 focus-within:ring-2"
      >
        <input
          type="text"
          className="peer outline-none"
          placeholder=" "
          {...rest}
        />
        <span className="absolute bg-white transition-all duration-150 label-active peer-placeholder-shown:label-inactive peer-focus:label-active peer-focus:text-green-600">
          {label}
        </span>
      </div>
    </label>
  );
}
