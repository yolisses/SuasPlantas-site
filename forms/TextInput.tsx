import { Label } from "./Label";

interface TextInputProps {
  label: string;
  optional?: boolean;
  leftChild?: JSX.Element;
}

export function TextInput({ label, optional, leftChild }: TextInputProps) {
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
            type="textarea"
            placeholder={optional ? "opcional" : undefined}
            className=" self-stretch flex flex-1 outline-none"
          />
        </div>
      </div>
    </label>
  );
}
