import { useState } from 'react';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  Checkbox,
  FormLabel,
  FormGroup,
  TextField,
  FormHelperText,
  InputAdornment,
  FormControlLabel,
  CircularProgress,
} from '@mui/material';
import Router from 'next/router';
import { api } from '../api/api';
import { Plant } from './Plant';
import { tagEmoji, tags } from './tags';
import { Header } from '../common/Header';
import { Sending } from '../upload/Sending';
import { snackStore } from '../snack/snackStore';
import { imagesToSendings } from '../images/imagesToSendings';
import { ImagesInput, SendingsCollection } from '../images/ImagesInput';

interface EditPlantProps{
  edit?:boolean
  data?:Plant
}

export function EditPlantPage({ edit, data }:EditPlantProps) {
  const [sell, setSell] = useState(!!data?.price);
  const [loading, setLoading] = useState(false);
  const {
    register, handleSubmit, control, formState: { errors }, getValues,
  } = useForm({
    defaultValues: {
      ...data,
      user: undefined,
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
        price: (sell && parseFloat(data.price)) || null,
      });
      snackStore.setSnack({
        severity: 'success',
        text: edit ? 'Planta alterada com sucesso' : 'Sua planta foi adicionada!',
      });
      Router.push(`/plants/${res.data.id}`);
    } catch (err:any) {
      snackStore.setSnack({ severity: 'error', text: err.message });
      throw err;
    }
    setLoading(false);
  }

  function validateAvailabilities() {
    if (!getValues('swap') && !getValues('donate') && !sell) {
      return 'Por favor informe marque uma das opções';
    }
    return undefined;
  }

  return (
    <>
      <Header />
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
          <Controller
            name="tags"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                multiple
                options={tags}
                disableCloseOnSelect
                value={value}
                onChange={(_, value) => onChange(value)}
                getOptionLabel={(option) => tagEmoji[option] + option}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {tagEmoji[option]}
                    {option}
                  </li>
                )}
                renderInput={(params) => (<TextField label="Marcar como" {...params} />)}
              />
            )}
          />
          <TextField
            label="Quantidade (opcional)"
            type="number"
            InputProps={{
              inputProps: { min: 1, max: 100, pattern: '[0-9]*' },
            }}
            {...register('amount')}
          />
          <div>
            <FormLabel component="legend">Disponível para</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="Doação"
                control={(
                  <Controller
                    name="donate"
                    control={control}
                    rules={{ validate: validateAvailabilities }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Checkbox
                        {...field}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                      />
                    )}
                  />
                )}
              />
              <FormControlLabel
                label="Troca"
                control={(
                  <Controller
                    name="swap"
                    control={control}
                    rules={{ validate: validateAvailabilities }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Checkbox
                        {...field}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                      />
                    )}
                  />
                )}
              />
              <FormControlLabel
                label="Venda"
                control={(
                  <Checkbox
                    onChange={(e) => setSell(e.target.checked)}
                    checked={sell}
                  />
                )}
              />
            </FormGroup>
            {(errors.swap && errors.donate && !sell) && (
            <FormHelperText error>
              Por favor informe uma disponibilidade
            </FormHelperText>
            )}
            {sell && (
            <Controller
              name="price"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Preço"
                  type="number"
                  className="w-full mt-2"
                  helperText={(error?.type === 'required') ? 'Informe o preço ou desmarque venda' : error?.message}
                  error={!!error}
                  {...field}
                  InputProps={{
                    inputProps: { min: 0, max: 100, pattern: '[0-9]*' },
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  }}
                />
              )}
            />
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="contained" className="h-12 flex-1" onClick={handleSubmit(submit)} disabled={loading}>
              {loading && <CircularProgress size={20} className="mr-2" />}
              {edit ? 'Salvar' : 'Adicionar'}
            </Button>
            {edit && (
            <Link href={`/plants/${data?.id}`}>
              <Button className="h-12 flex-1" disabled={loading}>
                Cancelar
              </Button>
            </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
