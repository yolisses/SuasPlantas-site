import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { Plant } from './Plant';
import { api } from '../api/api';
import { Sending } from '../upload/Sending';
import { Spinner } from '../common/Spinner';
import { usePlants } from './plantsContext';
import { useSnack } from '../snack/SnackContext';
import { imagesToSendings } from '../images/imagesToSendings';
import { ImagesInput, SendingsCollection } from '../images/ImagesInput';

interface EditPlantProps{
  edit?:boolean
  data?:Plant
}

export function EditPlantPage({ edit, data }:EditPlantProps) {
  const [loading, setLoading] = useState(false);
  const { setSnack } = useSnack();
  const { reset } = usePlants();
  const {
    register, handleSubmit, control,
  } = useForm({
    defaultValues: {
      ...data,
      user: undefined,
      alsoSaw: undefined,
      tags: data?.tags.map((tag) => tag.name),
      images: data?.images ? imagesToSendings(data.images) : {},
    },
  });

  async function allImagesSent(images: SendingsCollection) {
    const imagesPromisses = Object.values(images).map((image) => image.sendPromise);
    await Promise.all(imagesPromisses);
  }

  async function submit(data:any) {
    setLoading(true);
    try {
      await allImagesSent(data.images);
      const method = edit ? api.patch : api.post;
      const res = await method('plants', {
        ...data,
        images: Object.values(data.images).map((value) => (value as Sending).key),
        amount: parseInt(data.amount, 10) || null,
      });
      setSnack({
        severity: 'success',
        text: edit ? 'Planta alterada com sucesso' : 'Sua planta foi adicionada!',
      });
      Router.push(`/plants/${res.data.id}`);
    } catch (err:any) {
      setSnack({ severity: 'error', text: err.message });
      throw err;
    }
    setLoading(false);
    reset();
  }

  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col p-2 gap-4 max-w-lg w-full pb-8">
        <Controller
          name="images"
          control={control}
          render={
            ({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <ImagesInput
                error={!!error}
                onBlur={onBlur}
                onChange={onChange}
                helperText={error?.message}
                initialSendings={value as SendingsCollection}
              />
            )
            }
          rules={{
            validate: (selected) => {
              if (Object.keys(selected).length < 1) {
                return 'Selecione pelo menos 1 imagem';
              }
              if (Object.keys(selected).length > 10) {
                return 'Selecione no máximo 10 imagine';
              }
              return undefined;
            },
          }}
        />
        <Controller
          name="name"
          control={control}
          rules={{ required: true, min: 3 }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Nome"
              helperText={error?.type === 'required' ? 'Por favor informe o nome' : error?.message}
              error={!!error}
              {...field}
            />
          )}
        />
        <TextField label="Descrição" multiline minRows={2} {...register('description')} />
        <TextField
          label="Quantidade (opcional)"
          type="number"
          InputProps={{
            inputProps: { min: 1, max: 100, pattern: '[0-9]*' },
          }}
          {...register('amount')}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="main-button h-12 flex-1" onClick={handleSubmit(submit)} disabled={loading}>
            {loading && <Spinner /> }
            {edit ? 'Salvar' : 'Adicionar'}
          </button>
          {edit && (
            <Link href={`/plants/${data?.id}`}>
              <a>
                <button className="h-12 flex-1 p-2 rounded-lg" disabled={loading}>
                  Cancelar
                </button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
