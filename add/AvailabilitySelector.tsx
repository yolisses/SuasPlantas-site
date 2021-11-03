import { Label } from "./Label";
import { ToggleButton } from "./ToggleButton";

export function AvailabilitySelector() {
  return (
    <div>
      <Label text="Disponível para" />
      <div className="flex flex-row gap-2 mb-3 pt-1">
        <ToggleButton text="Doação" />
        <ToggleButton text="Troca" />
        <ToggleButton text="Venda" />
      </div>
    </div>
  );
}
