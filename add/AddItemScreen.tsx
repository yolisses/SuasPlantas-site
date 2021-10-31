import { TextInput } from "./TextInput";

export function AddScreen() {
  return (
    <div className="flex flex-col p-4">
      <TextInput label="Nome" />
      <TextInput label="Descrição" optional />
    </div>
  );
}
