import { FieldValues, UseFormRegister } from "react-hook-form";
import { FieldBox } from "./FieldBox";
import { ToggleButton } from "./ToggleButton";

interface TagsSelectorProps {
  options: string[];
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
}

export function TagsSelector({
  options,
  label,
  id,
  register,
}: TagsSelectorProps) {
  return (
    <FieldBox label={label} labelActive={false}>
      <div className="pt-2 flex flex-row flex-wrap gap-2">
        {options.map((option) => (
          <ToggleButton
            text={option}
            key={option}
            {...register(id + "." + option)}
          />
        ))}
      </div>
    </FieldBox>
  );
}
