import {
  Rating,
  TextField,
  IconContainerProps,
} from '@mui/material';
import { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { SvgIconComponent } from '@material-ui/icons';
import { Controller, useForm } from 'react-hook-form';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FaCheck, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { useUser } from '../auth/userContext';
import { useSnack } from '../snack/SnackContext';

const customIcons:{[key:string]:SvgIconComponent} = {
  1: <SentimentVeryDissatisfiedIcon fontSize="large" />,
  2: <SentimentDissatisfiedIcon fontSize="large" />,
  3: <SentimentSatisfiedIcon fontSize="large" />,
  4: <SentimentSatisfiedAltIcon fontSize="large" />,
  5: <SentimentVerySatisfiedIcon fontSize="large" />,
};

function IconContainer(props:IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value]}</span>;
}

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<any>();
  const { setSnack } = useSnack();
  const { user } = useUser();

  const {
    watch, register, handleSubmit, control,
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      rating: undefined,
      message: '',
    },
  });

  async function submit(data:any) {
    setLoading(true);
    try {
      await api.post('feedback', {
        ...data,
        rating: parseInt(data.rating, 10),
      });
      setSent(true);
    } catch (err:any) {
      setSnack({ severity: 'error', text: err.message });
    }
    setLoading(false);
  }

  return (
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+55839345-0389"
              className="link w-full max-w-sm"
            >
              +55 83 9345-0389
            </a>
          </div>
          <div>
            <h2 className="flex flex-row items-center gap-1">
              <FaInstagram color="green" />
              {' '}
              Instagram
            </h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/suasplantas.com.br/"
              className="link w-full max-w-sm"
            >
              @suasplantas.com.br
            </a>
          </div>
          <div>
            <h2 className="flex flex-row items-center gap-1">
              <RiFacebookCircleLine color="green" />
              {' '}
              Facebook
            </h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/suasplantas.com.br"
              className="link w-full max-w-sm"
            >
              facebook.com/suasplantas.com.br
            </a>
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
              <button
                onClick={handleSubmit(submit)}
                className="main-button"
                disabled={loading || (!watch('message') && !watch('rating'))}
              >
                { loading && <Spinner radius={20} />}
                Enviar!
              </button>
            )}
        </fieldset>
      </div>
    </div>
  );
}
