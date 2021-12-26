import {
  Checkbox, FormControlLabel, FormGroup, FormLabel, InputAdornment, TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ImagesInput } from '../forms/ImagesInput';
import { Header } from '../common/Header';
import { tags } from './tags';

export function AddPlantPage() {
  const [sell, setSell] = useState(false);
  const { register, handleSubmit, control } = useForm();

  function submit(data) {
    console.log(data);
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
            ({ field: { onChange } }) => <ImagesInput onChange={onChange} />
          }
          />
          <TextField label="Nome" {...register('name')} />
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
            <FormGroup className="flex-row justify-between">
              <FormControlLabel
                label="Doação"
                control={(<Checkbox {...register('donate')} />)}
              />
              <FormControlLabel
                label="Troca"
                control={(<Checkbox {...register('swap')} />)}
              />
              <FormControlLabel
                label="Venda"
                control={(<Checkbox onChange={(e, checked) => setSell(checked)} />)}
              />
            </FormGroup>
            {sell
            && (
            <TextField
              label="Preço"
              type="number"
              className="w-full mt-2"
              {...register('price')}
              InputProps={{
                inputProps: { min: 0, max: 100, pattern: '[0-9]*' },
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
            )}
          </div>
          <Button variant="contained" className="h-12" onClick={handleSubmit(submit)}>
            {/* <CircularProgress size={20} className="mr-2" /> */}
            Adicionar
          </Button>
        </div>
      </div>
    </>

  );
}
