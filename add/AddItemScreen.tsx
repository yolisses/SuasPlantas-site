import { AvailabilitySelector } from "./AvailabilitySelector";
import { EmphasisButton } from "../forms/EmphasisButton";
import { TextInput } from "../forms/TextInput";
import { tags } from "./tags";
import { TagsSelector } from "../forms/TagsSelector";
import { useForm } from "react-hook-form";

export function AddScreen() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.error(watch("name")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-1 h-full items-stretch p-2">
        <TextInput label="Nome" {...register("name")} />
        <AvailabilitySelector />
        <TextInput label="Descrição" optional />
        <TagsSelector label="Marcar como" options={tags} />
        <TextInput label="Quantidade" optional />
        <EmphasisButton text="Adicionar" />
      </div>
    </form>
  );
}
