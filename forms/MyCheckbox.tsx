import { forwardRef, HTMLProps, useState } from "react";

interface MyCheckBoxProps extends HTMLProps<HTMLInputElement> {
  text: string;
  error?: string;
  className?: string;
}

export const MyCheckBox = forwardRef((props: MyCheckBoxProps, ref) => {
  const { text, error, onChange, className, ...rest } = props;

  const [checked, setChecked] = useState<boolean>();
  console.error("checked", checked);
  return (
    <label>
      <input
        ref={ref}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange(e);
        }}
        {...rest}
        className="hidden"
      />
      <div
        className={
          "border-2 p-3 bg-white border-gray-300 text-center rounded-lg whitespace-nowrap select-none cursor-pointer " +
          (checked ? "border-green-400 " : "text-gray-500 ") +
          (className || "")
        }
      >
        {text}
      </div>
    </label>
  );
});
