import { forwardRef, HTMLProps } from "react";
import { FieldBox } from "./FieldBox";

interface TextInputProps extends HTMLProps<HTMLButtonElement> {
  label: string;
  error?: string;
  optional?: boolean;
  leftChild?: JSX.Element;
}

export const TextInput = forwardRef(
  ({ label, optional, leftChild, error, ...rest }: TextInputProps, ref) => {
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
            placeholder={optional ? "opcional" : undefined}
            className=" self-stretch flex flex-1 outline-none"
            {...rest}
          />
        </div>
      </FieldBox>
    );
  }
);
