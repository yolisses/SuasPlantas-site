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
import { getTrueValuedKeys } from "../utils/getTrueValuedKeys";
import { useState } from "react";
import gql from "graphql-tag";
import client from "../api/apollo-client";
import { ImageUpload } from "../forms/ImageUpload";

export function AddScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    data.tags = getTrueValuedKeys(data.tags);
    const mutation = gql`
      mutation ($plant: Create) {
        createPlant(plant: $plant) {
          id
        }
      }
    `;
    await client.mutate({
      mutation,
      variables: {
        plant: {
          name: "massaterana nya",
        },
      },
    });
  }

  const required = { value: true, message: "Esse campo é obrigatório" };

  const [sell, setSell] = useState<boolean>(false);

  function onSellPress() {
    setSell((value) => !value);
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-1 h-full items-stretch p-2 max-w-md gap-2">
          <ImageUpload />
          <TextInput
            label="Nome"
            {...register("name", { required })}
            error={errors?.name?.message}
            maxLength={128}
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
                  value={sell as unknown as string}
                  onChange={onSellPress}
                />
              </div>
            </div>
          </FieldBox>
          {sell && (
            <TextInput
              label="Preço"
              type="number"
              mask={allowNumbersRegex}
              min={0}
              max={9999}
              maxLength={4}
              leftChild={<MoneySign />}
            />
          )}
          <EmphasisButton
            text="Adicionar"
            loadingText="Adicionando"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
}
