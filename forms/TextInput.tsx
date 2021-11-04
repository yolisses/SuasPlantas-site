import { ChangeEvent, FormEvent, forwardRef, HTMLProps } from "react";
import { allowNumbersRegex } from "./allowNumbersRegex";
import { FieldBox } from "./FieldBox";

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  mask?: RegExp;
  label: string;
  error?: string;
  optional?: boolean;
  leftChild?: JSX.Element;
}

export const TextInput = forwardRef((props: TextInputProps, ref) => {
  const { label, optional, leftChild, error, mask, onChange, ...rest } = props;

  function handleBeforeInput(e: FormEvent<HTMLInputElement>) {
    if (mask && !mask.test((e as any).data)) {
      e.preventDefault();
    }
  }

  return (
    <FieldBox
      label={label}
      error={error}
      labelClassName="transform translate-y-2 bg-white px-1"
    >
      <div
        className={
          "flex flex-1 self-stretch flex-row border-2 border-gray-300 rounded-lg p-3 focus:border-black focus-within:border-gray-800"
        }
      >
        {leftChild}
        <input
          ref={ref}
          onBeforeInput={handleBeforeInput}
          placeholder={optional ? "opcional" : undefined}
          className=" self-stretch flex flex-1 outline-none"
          {...rest}
        />
      </div>
    </FieldBox>
  );
});
