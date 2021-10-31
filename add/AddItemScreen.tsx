import { EmphasisButton } from "./EmphasisButton";
import { TextInput } from "./TextInput";

export function AddScreen() {
  return (
    <div className="flex flex-col flex-1 h-full items-stretch p-2">
      <TextInput label="Nome" />
      <TextInput label="Descrição" optional />
      <EmphasisButton text="Adicionar" />
    </div>
  );
}
