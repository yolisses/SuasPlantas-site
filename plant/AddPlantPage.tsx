import {
  Alert,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputAdornment,
  Snackbar,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ImagesInput, SendingsCollection } from '../forms/ImagesInput';
import { Header } from '../common/Header';
import { tags } from './tags';
import { api, BasicError } from '../api/api';
import { Sending } from '../upload/Sending';

interface Snack{
  severity?:'error'|'info'|'success'|'warning'
  text:string
}

export function AddPlantPage() {
  const [sell, setSell] = useState(false);
  const {
    register, handleSubmit, control, getValues, formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<Snack>();

  async function allImagesSent(images: SendingsCollection) {
    const imagesPromisses = Object.values(images).map((image) => image.sendPromise);
    await Promise.all(imagesPromisses);
  }

  async function submit(data:any) {
    setLoading(true);
    try {
      await allImagesSent(data.images);
      await api.post('plants', {
        ...data,
        images: Object.values(data.images).map((value) => (value as Sending).key),
        amount: parseInt(data.amount, 10) || null,
        price: (sell && parseFloat(data.price)) || null,
      });
    } catch (err:any) {
      setLoading(false);
      setSnack({ severity: 'error', text: err.message });
      throw err;
    }
    setLoading(false);
    setSnack({ severity: 'success', text: 'Sua planta foi adicionada!' });
  }

  function handleSnackClose() {
    setSnack(undefined);
  }

  function validateAvailabilities() {
    if (!getValues('donate') && !getValues('swap') && !getValues('sell')) { return 'Por favor informe a disponibilidade'; }
    return undefined;
  }

  return (
    <>
      <Header />
      {snack && (
      <Snackbar open autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert severity={snack.severity} className="w-full" variant="filled">
          {snack.text}
        </Alert>
      </Snackbar>
      )}
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col p-2 gap-4 max-w-lg w-full pb-8">
          <Controller
            name="images"
            control={control}
            rules={{
              validate: (coisas) => {
                if (Object.keys(coisas).length < 1) {
                  return 'Selecione pelo menos 1 imagem';
                }
                if (Object.keys(coisas).length > 10) {
                  return 'Selecione no máximo 10 imagens';
                }
                return undefined;
              },
            }}
            render={
            ({ field: { onChange, onBlur }, fieldState: { error } }) => (
              <ImagesInput
                onChange={onChange}
                onBlur={onBlur}
                error={!!error}
                helperText={error?.message}
              />
            )
          }
          />
          <Controller
            name="name"
            control={control}
            rules={{ required: true, min: 3 }}
            render={({ field, fieldState: { error } }) => {
              console.log(error);
              return (
                <TextField
                  label="Nome"
                  helperText={error?.type === 'required' ? 'Por favor informe o nome' : error?.message}
                  error={!!error}
                  {...field}
                />
              );
            }}
          />
          <TextField label="Descrição" multiline minRows={2} {...register('description')} />
          <Controller
            name="tags"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                multiple
                options={tags}
                disableCloseOnSelect
                onChange={(_, value) => onChange(value)}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
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
                control={(<Checkbox {...register('donate', { validate: validateAvailabilities })} />)}
              />
              <FormControlLabel
                label="Troca"
                control={(<Checkbox {...register('swap', { validate: validateAvailabilities })} />)}
              />
              <FormControlLabel
                label="Venda"
                control={(<Checkbox {...register('sell', { validate: validateAvailabilities })} onChange={(e, checked) => setSell(checked)} />)}
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
          <Button variant="contained" className="h-12" onClick={handleSubmit(submit)} disabled={loading}>
            {loading && <CircularProgress size={20} className="mr-2" />}
            Adicionar
          </Button>
        </div>
      </div>
    </>

  );
}
