import { forwardRef, HTMLProps, useState } from "react";

interface ToggleButtonProps extends HTMLProps<HTMLInputElement> {
  text: string;
  error?: string;
  className?: string;
}

export const ToggleButton = forwardRef((props: ToggleButtonProps, ref) => {
  const { text, error, onChange, className, ...rest } = props;
  const [checked, setChecked] = useState<boolean>();

  return (
    <label
      className={
        "border-2 p-3 bg-white border-gray-300 text-center rounded-lg whitespace-nowrap select-none cursor-pointer focus-within:shadow-md " +
        (checked ? "border-green-700 border-opacity-50 " : "text-gray-500 ") +
        (className || "")
      }
    >
      <input
        ref={ref}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
          if (onChange) onChange(e);
        }}
        {...rest}
        className="absolute transform scale-0 opacity-0"
      />
      {text}
    </label>
  );
});
