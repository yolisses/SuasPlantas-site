import { FieldBox } from "./FieldBox";
import { ToggleButton } from "./ToggleButton";

interface TagsSelectorProps {
  options: string[];
  label: string;
}

export function TagsSelector({ options, label }: TagsSelectorProps) {
  return (
    <FieldBox label={label} labelActive={false}>
      <div className="pt-2 flex flex-row flex-wrap gap-2">
        {options.map((option) => (
          <ToggleButton text={option} key={option} />
        ))}
      </div>
    </FieldBox>
  );
}
