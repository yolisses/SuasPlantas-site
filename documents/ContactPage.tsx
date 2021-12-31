import {
  Button, CircularProgress, Link, Rating, TextField,
} from '@mui/material';
import { FaCheck, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Header } from '../common/Header';
import { authStore } from '../auth/authStore';
import { api } from '../api/api';
import { snackStore } from '../snack/snackStore';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="large" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="large" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize="large" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize="large" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize="large" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<any>();

  const {
    watch, register, handleSubmit, control,
  } = useForm({
    defaultValues: {
      name: authStore.user?.name || '',
      email: authStore.user?.email || '',
      rating: undefined,
      message: '',
    },
  });

  async function submit(data) {
    setLoading(true);
    try {
      await api.post('feedback', {
        ...data,
        rating: parseInt(data.rating, 10),
      });
      setSent(true);
    } catch (err) {
      snackStore.setSnack({ severity: 'error', text: err.message });
    }
    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-2">
        <h1 className="text-3xl">Contato</h1>
        <p className="text-gray-500">Adoramos receber mensagens!</p>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center md:items-start justify-center md:py-4">
          <address className="not-italic py-4 flex flex-col gap-4 w-full max-w-md">
            <div>
              <h2 className="flex flex-row items-center gap-1">
                <BiEnvelope color="green" />
                Email
              </h2>
              suasplantascontato@gmail.com
            </div>
            <div>
              <h2 className="flex flex-row items-center gap-1">
                <FaWhatsapp color="green" />
                {' '}
                Telefone/Whatsapp
              </h2>
              +55 83 9345-0389
            </div>
            <div>
              <h2 className="flex flex-row items-center gap-1">
                <FaInstagram color="green" />
                {' '}
                Instagram
              </h2>
              <Link href="https://www.instagram.com/suasplantasoficial">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/suasplantasoficial"
                  className="w-full max-w-sm"
                >
                  @suasplantasoficial
                </a>
              </Link>
            </div>
            <div>
              <h2 className="flex flex-row items-center gap-1">
                <RiFacebookCircleLine color="green" />
                {' '}
                Facebook
              </h2>
              <Link href="https://www.facebook.com/suasplantasoficial">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/suasplantasoficial"
                  className="w-full max-w-sm"
                >
                  facebook.com/suasplantasoficial
                </a>
              </Link>
            </div>
          </address>
          <fieldset className="flex flex-col gap-3 items-stretch w-full max-w-md">
            <div>Enviar feedback</div>
            <TextField label="Nome (opcional)" className="w-full" {...register('name')} />
            <TextField label="Email (opcional)" {...register('email')} />
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating
                  IconContainerComponent={IconContainer}
                  highlightSelectedOnly
                  {...field}
                />
              )}
            />
            <TextField label="Mensagem" multiline minRows={2} {...register('message')} />
            {sent
              ? (
                <div className="flex flex-row justify-center items-center gap-2">
                  <FaCheck color="green" />
                  Enviado
                </div>
              )
              : (
                <Button
                  variant="contained"
                  onClick={handleSubmit(submit)}
                  className="flex flex-row items-center gap-1"
                  disabled={loading || (!watch('message') && !watch('rating'))}
                >
                  { loading && <CircularProgress size={20} />}
                  Enviar!
                </Button>
              )}
          </fieldset>
        </div>
      </div>
    </>
  );
}
