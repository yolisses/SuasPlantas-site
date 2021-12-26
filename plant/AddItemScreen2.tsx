/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { tags } from './tags';
import { api } from '../api/api';
import { Header } from '../common/Header';
import { FieldBox } from '../forms/FieldBox';
import { MoneySign } from '../forms/MoneySign';
import { TextInput } from '../forms/TextInput';
import { ImagesInput } from '../forms/ImagesInput';
import { TagsSelector } from '../forms/TagsSelector';
import { ToggleButton } from '../forms/ToggleButton';
import { EmphasisButton } from '../forms/EmphasisButton';
import { allowNumbersRegex } from '../forms/allowNumbersRegex';
import { getTrueValuedKeys } from '../utils/getTrueValuedKeys';

export function AddScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    console.log(data);
    data.tags = getTrueValuedKeys(data.tags);
    data.amount = data.amount === '' ? null : parseInt(data.amount, 10);
    delete data.tags;
    // await api.post('plants', data);
  }

  const required = { value: true, message: 'Esse campo é obrigatório' };

  const [sell, setSell] = useState<boolean>(false);

  function onSellPress() {
    setSell((value) => !value);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col p-2 items-center">
        <div className="flex flex-col items-stretch max-w-lg gap-2">
          <ImagesInput />
          <TextInput
            label="Nome"
            maxLength={128}
            error={errors?.name?.message}
            {...register('name', { required })}
          />
          <TextInput
            multiple
            optional
            maxLength={2048}
            label="Descrição"
            {...register('description')}
          />
          <TagsSelector
            id="tags"
            options={tags}
            label="Marcar como"
            register={register}
          />
          <TextInput
            min={1}
            optional
            max={9999}
            type="number"
            maxLength={4}
            label="Quantidade"
            {...register('amount')}
            mask={allowNumbersRegex}
          />
          <FieldBox label="Disponível para" labelActive={false}>
            <div className="self-stretch ">
              <div className="flex flex-row gap-2 pt-1 ">
                <ToggleButton
                  text="Doação"
                  {...register('donate')}
                  className="flex flex-1"
                />
                <ToggleButton
                  text="Troca"
                  {...register('swap')}
                  className="flex flex-1"
                />
                <ToggleButton
                  text="Venda"
                  onChange={onSellPress}
                  className="flex flex-1"
                  value={sell as unknown as string}
                />
              </div>
            </div>
          </FieldBox>
          {sell && (
          <TextInput
            min={0}
            max={9999}
            type="number"
            label="Preço"
            maxLength={4}
            {...register('price')}
            mask={allowNumbersRegex}
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
    </>
  );
}
