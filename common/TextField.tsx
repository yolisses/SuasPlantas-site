import {
  DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode,
} from 'react';

interface CustomProps{
    label?:string
    error?:boolean
    patern?:string
    minRows?:number
    multiline?:boolean
    helperText?:string
    startAdornment?:ReactNode
}

type TextFieldProps = CustomProps&
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TextField = forwardRef(({
  label,
  error,
  patern,
  minRows,
  multiline,
  helperText,
  startAdornment,
  ...rest
}:TextFieldProps, ref:any) => (
  <label className="cursor-text">
    <div
      className="flex flex-row gap-2 relative ring-1 ring-gray-300 rounded-lg py-4 px-3 mt-1 hover:ring-black focus-within:ring-green-500 hover:focus-within:ring-green-500 focus-within:ring-2"
    >
      {startAdornment}
      <input
        ref={ref}
        type="text"
        data-hj-allow
        placeholder=" "
        className="peer outline-none inline"
        {...rest}
      />
      <span className="absolute bg-white transition-all duration-150 label-active peer-placeholder-shown:label-inactive peer-focus:label-active peer-focus:text-green-600">
        {label}
      </span>
    </div>
  </label>
));
