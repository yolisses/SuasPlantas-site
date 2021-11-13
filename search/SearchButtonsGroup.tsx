import { ReactElement } from "react";
import { getUniqueValues } from "../utils/getUniqueValues";
import { SearchButton } from "./SearchButton";

interface SearchButtonsGroupProps {
  label: string;
  options: string[];
  button: ReactElement;
}

export function SearchButtonsGroup({
  label,
  options,
  button,
}: SearchButtonsGroupProps) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="mb-2">{label}</div>
        {button}
      </div>
      <div className="flex flex-row gap-1 flex-wrap">
        {getUniqueValues(options)
          .reverse()
          .slice(0, 10)
          .map((value) => (
            <SearchButton text={value} key={value} />
          ))}
      </div>
    </div>
  );
}
