import { Label } from "../forms/Label";
import { MoneySign } from "../forms/MoneySign";
import { TextInput } from "../forms/TextInput";
import { ToggleButton } from "../forms/ToggleButton";

export function AvailabilitySelector() {
  return (
    <div>
      <Label text="Disponível para" />
      <div className="flex flex-row gap-2 mb-3 pt-1">
        <ToggleButton text="Doação" className="flex flex-1" />
        <ToggleButton text="Troca" className="flex flex-1" active />
        <ToggleButton text="Venda" className="flex flex-1" />
      </div>
      <TextInput label="Preço" leftChild={<MoneySign />} />
    </div>
  );
}
