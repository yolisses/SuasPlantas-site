import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FieldBox } from './FieldBox';
import { ToggleButton } from './ToggleButton';

interface TagsSelectorProps {
  id: string;
  label: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
}

export function TagsSelector({
  id,
  label,
  options,
  register,
}: TagsSelectorProps) {
  return (
    <FieldBox
      label={label}
      labelActive={false}
      labelClassName="transform translate-y-1 bg-white "
    >
      <div className="pt-1 flex flex-row flex-wrap gap-2">
        {options.map((option) => (
          <ToggleButton
            text={option}
            key={option}
            {...register(`${id}.${option}`)}
          />
        ))}
      </div>
    </FieldBox>
  );
}
