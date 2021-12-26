import { FieldBox } from "../forms/FieldBox";
import { MoneySign } from "../forms/MoneySign";
import { TextInput } from "../forms/TextInput";
import { ToggleButton } from "../forms/ToggleButton";

export function AvailabilitySelector() {
  return (
    <div>
      <FieldBox label="Disponível para" labelActive={false}>
        <div className="self-stretch ">
          <div className="flex flex-row gap-2 pt-1 ">
            <ToggleButton text="Doação" className="flex flex-1" />
            <ToggleButton text="Troca" className="flex flex-1" />
            <ToggleButton text="Venda" className="flex flex-1" />
          </div>
        </div>
      </FieldBox>
      <TextInput label="Preço" type="number" leftChild={<MoneySign />} />
    </div>
  );
}
