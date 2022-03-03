import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { TextField } from '../common/TextField';
import { useSnack } from '../snack/SnackContext';
import { allImagesSent } from '../images/allImagesSent';
import { ImagesInput, SendingsCollection } from '../images/ImagesInput';

export function AddUserPage() {
  const [loading, setLoading] = useState(false);
  const { setSnack } = useSnack();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      city: '',
      fbId: '',
      state: '',
      images: {} as SendingsCollection,
    },
  });

  async function submit(data:any) {
    const {
      name, images, city, state,
    } = data;
    setLoading(true);
    await allImagesSent(images);
    const image = Object.values(images as SendingsCollection)[0].uri;
    try {
      await api.post('users/by-profile', {
        name,
        image,
        city,
        state,
      });
    } catch (err:any) {
      setSnack({ severity: 'error', text: JSON.stringify(err) });
    }
    setSnack({ severity: 'success', text: 'Usuário adicionado com sucesso' });
    setLoading(false);
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <h1>Adicionar usuário</h1>
      <div className="w-full max-w-md flex flex-col gap-4">
        <TextField label="nome" {...register('name')} />
        <TextField label="cidade" {...register('city')} />
        <TextField label="estado" {...register('state')} />
        <TextField label="fbId" {...register('fbId')} />
        <Controller
          name="images"
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <ImagesInput
              onBlur={onBlur}
              onChange={onChange}
              initialSendings={value as SendingsCollection}
            />
          )}
        />
        <button
          disabled={loading}
          className="main-button"
          onClick={handleSubmit(submit)}
        >
          {loading
          && <Spinner size={25} />}
          Adicionar
        </button>
      </div>
    </div>
  );
}
