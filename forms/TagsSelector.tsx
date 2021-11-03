import { Label } from "./Label";
import { ToggleButton } from "./ToggleButton";

interface TagsSelectorProps {
  options: string[];
  label: string;
}

export function TagsSelector({ options, label }: TagsSelectorProps) {
  return (
    <div>
      <Label text={label} />
      <div className="pt-2 flex flex-row flex-wrap gap-2 mb-4">
        {options.map((option) => (
          <ToggleButton text={option} key={option} />
        ))}
      </div>
    </div>
  );
}
