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
    data.tags = getTrueValuedKeys(data.tags);
    data.amount = data.amount === '' ? null : parseInt(data.amount, 10);
    delete data.tags;
    await api.post('plants', data);
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
            {...register('name', { required })}
            error={errors?.name?.message}
            maxLength={128}
          />
          <TextInput
            multiple
            optional
            maxLength={2048}
            label="Descrição"
            {...register('description')}
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
            {...register('amount')}
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
                  {...register('donate')}
                />
                <ToggleButton
                  text="Troca"
                  className="flex flex-1"
                  {...register('swap')}
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
    </>
  );
}
