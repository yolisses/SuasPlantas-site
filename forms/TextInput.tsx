import { forwardRef, HTMLProps } from "react";
import { Label } from "./Label";

interface TextInputProps extends HTMLProps<HTMLButtonElement> {
  label: string;
  optional?: boolean;
  leftChild?: JSX.Element;
}

export const TextInput = forwardRef(
  ({ label, optional, leftChild, ...rest }: TextInputProps, ref) => {
    return (
      <label>
        <div className="flex flex-col items-start transform -translate-y-1 mb-3">
          <div className="relative transform translate-y-1 ">
            <Label text={label} className="bg-white pb-1" />
          </div>
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
        </div>
      </label>
    );
  }
);
