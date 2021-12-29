import { Instagram } from '@material-ui/icons';
import {
  Button, FormHelperText, FormLabel, InputAdornment, Link, TextField,
} from '@mui/material';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { authStore } from '../auth/authStore';
import { Header } from '../common/Header';
import { userImage } from '../images/user';

export function EditProfileScreen() {
  const imageSize = 80;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full max-w-xl p-2 pt-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <Image src={authStore.user?.image || userImage} width={imageSize} height={imageSize} className="rounded-full" />
            <div className="flex flex-col">
              <FormLabel component="legend" className="text-center">Foto de perfil</FormLabel>
              <Button>Alterar</Button>
            </div>
          </div>
          <TextField
            label="Nome"
          />
          <TextField label="Bio" multiline minRows={2} />
          <div className="flex flex-col">
            <TextField
              label="Instagram"
              InputProps={{
                startAdornment:
  <InputAdornment position="start">
    <FaInstagram size={25} />
    <span className="pl-2">
      @
    </span>
  </InputAdornment>,
              }}
            />
            <Button className="self-start px-5">
              <a target="_blank" href="https://instagram.com/yowlisses" rel="noopener noreferrer">
                Testar
              </a>
            </Button>
          </div>
          <div className="flex flex-col">
            <TextField
              label="Whatsapp"
              InputProps={{
                startAdornment:
  <InputAdornment position="start">
    <FaWhatsapp size={25} />
  </InputAdornment>,
              }}
            />
            <Button className="self-start px-5">
              <a target="_blank" href="https://instagram.com/yowlisses" rel="noopener noreferrer">
                Testar
              </a>
            </Button>
          </div>
          <FormHelperText>
            Essas informações ficam visíveis para as outras pessoas
          </FormHelperText>
          <Button variant="contained">Salvar</Button>
        </div>
      </div>

    </>
  );
}
