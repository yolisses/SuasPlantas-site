import { AvailabilitySelector } from "./AvailabilitySelector";
import { EmphasisButton } from "../forms/EmphasisButton";
import { TextInput } from "../forms/TextInput";
import { tags } from "./tags";
import { TagsSelector } from "../forms/TagsSelector";
import { useForm } from "react-hook-form";
import { CustomCheckBox } from "../forms/CustomCheckbox";
import { MyCheckBox } from "../forms/MyCheckbox";

export function AddScreen() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("aqui", data);

  console.error(watch("coisa"));

  const required = { value: true, message: "Esse campo é obrigatório" };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-1 h-full items-stretch p-2">
        <MyCheckBox
          text="alguma coisa a ser clicada"
          error={errors?.coisa?.message}
          {...register("coisa", { required })}
        />
        <TextInput
          label="Nome"
          {...register("name", { required })}
          error={errors?.name?.message}
        />
        <AvailabilitySelector />
        <TextInput label="Descrição" optional {...register("description")} />
        <TagsSelector label="Marcar como" options={tags} />
        <TextInput
          label="Quantidade"
          optional
          {...register("amount")}
          type="number"
        />
        <EmphasisButton text="Adicionar" submit />
      </div>
    </form>
  );
}
