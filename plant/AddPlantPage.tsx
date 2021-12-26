import {
  Checkbox, FormControlLabel, FormGroup, FormLabel, InputAdornment, TextField, Toolbar,
} from '@mui/material';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ImagesInput } from '../forms/ImagesInput';
import { Header } from '../common/Header';
import { tags } from './tags';

export function AddPlantPage() {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <>
      <Header />
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col p-2 gap-4 max-w-lg w-full pb-8">
          <ImagesInput />
          <TextField label="Nome" />
          <TextField label="Descrição" multiline minRows={2} />
          <Autocomplete
            multiple
            options={tags}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Marcar como" />
            )}
          />
          <TextField
            label="Quantidade (opcional)"
            type="number"
            InputProps={{
              inputProps: { min: 1, max: 100, pattern: '[0-9]*' },
            }}
          />
          <div>
            <FormLabel component="legend">Disponível para</FormLabel>
            <FormGroup className="flex-row justify-between">
              <FormControlLabel
                control={<Checkbox />}
                label="Doação"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Troca"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Venda"
              />
            </FormGroup>
            <TextField
              label="Preço"
              type="number"
              className="w-full mt-2"
              InputProps={{
                inputProps: { min: 0, max: 100, pattern: '[0-9]*' },
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
          </div>
          <Button variant="contained" className="h-12">
            {/* <CircularProgress size={20} className="mr-2" /> */}
            Adicionar
          </Button>
        </div>
      </div>
    </>

  );
}
