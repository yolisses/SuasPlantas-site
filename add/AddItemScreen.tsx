import { AvailabilitySelector } from "./AvailabilitySelector";
import { EmphasisButton } from "../forms/EmphasisButton";
import { TextInput } from "../forms/TextInput";
import { tags } from "./tags";
import { TagsSelector } from "../forms/TagsSelector";
import { useForm } from "react-hook-form";
import { FieldBox } from "../forms/FieldBox";
import { ToggleButton } from "../forms/ToggleButton";
import { MoneySign } from "../forms/MoneySign";

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
        <TextInput
          label="Nome"
          {...register("name", { required })}
          error={errors?.name?.message}
        />
        <FieldBox label="Disponível para" labelActive={false}>
          <div className="self-stretch ">
            <div className="flex flex-row gap-2 pt-1 ">
              <ToggleButton
                text="Doação"
                className="flex flex-1"
                {...register("donate")}
              />
              <ToggleButton
                text="Troca"
                className="flex flex-1"
                {...register("swap")}
              />
              <ToggleButton
                text="Venda"
                className="flex flex-1"
                {...register("sell")}
              />
            </div>
          </div>
        </FieldBox>
        <TextInput label="Preço" type="number" leftChild={<MoneySign />} />
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
