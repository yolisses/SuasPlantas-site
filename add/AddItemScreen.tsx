import { AvailabilitySelector } from "./AvailabilitySelector";
import { EmphasisButton } from "../forms/EmphasisButton";
import { TextInput } from "../forms/TextInput";
import { tags } from "./tags";
import { TagsSelector } from "../forms/TagsSelector";

export function AddScreen() {
  return (
    <div className="flex flex-col flex-1 h-full items-stretch p-2">
      <TextInput label="Nome" />
      <AvailabilitySelector />
      <TextInput label="Descrição" optional />
      <TagsSelector label="Marcar como" options={tags} />
      <TextInput label="Quantidade" optional />
      <EmphasisButton text="Adicionar" />
    </div>
  );
}
