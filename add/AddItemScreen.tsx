import { EmphasisButton } from "../forms/EmphasisButton";
import { TextInput } from "../forms/TextInput";
import { tags } from "./tags";
import { TagsSelector } from "../forms/TagsSelector";
import { useForm } from "react-hook-form";
import { FieldBox } from "../forms/FieldBox";
import { ToggleButton } from "../forms/ToggleButton";
import { MoneySign } from "../forms/MoneySign";
import { allowNumbersRegex } from "../forms/allowNumbersRegex";
import { Header } from "../common/Header";
import { api } from "../api/api";
import { getTrueValuedKeys } from "../utils/getTrueValuedKeys";

export function AddScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    data.tags = getTrueValuedKeys(data.tags);
    console.error(JSON.stringify(data));
    api.post("plants/", data);
  }

  const required = { value: true, message: "Esse campo é obrigatório" };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col flex-1 h-full items-stretch p-2 max-w-md">
            <TextInput
              label="Nome"
              {...register("name", { required })}
              error={errors?.name?.message}
              maxLength={128}
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
            <TextInput
              label="Preço"
              type="number"
              mask={allowNumbersRegex}
              min={0}
              max={9999}
              maxLength={4}
              leftChild={<MoneySign />}
            />
            <TextInput
              optional
              maxLength={2048}
              label="Descrição"
              {...register("description")}
            />
            <TagsSelector
              label="Marcar como"
              id="tags"
              options={tags}
              register={register}
            />
            <TextInput
              label="Quantidade"
              optional
              {...register("amount")}
              type="number"
              min={1}
              max={9999}
              maxLength={4}
              mask={allowNumbersRegex}
            />
            <EmphasisButton text="Adicionar" submit />
          </div>
        </div>
      </form>
    </div>
  );
}
