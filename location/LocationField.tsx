/* eslint-disable prefer-destructuring */
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { GrClose } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Spinner from 'react-spinner-material';
import { Button, IconButton } from '@mui/material';

import { Feature } from './Feature';
import { authStore } from '../auth/authStore';
import { AutoCompleteInput } from './AutoCompleteInput';
import { getFeaturesByText } from './getFeaturesByText';
import { api } from '../api/api';
import { snackStore } from '../snack/snackStore';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface LocationFieldProps{
    text:string
}

export function LocationField({ text }:LocationFieldProps) {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  // this variable is mutable, to support fast changes on map move
  const [center, setCenter] = useState<[number, number]>([0, 0]);

  function handleChange(value: Feature) {
    setCenter([value.center[1], value.center[0]]);
    console.log('coisa', value);
  }

  function getText(value: Feature) { return value.place_name.replace('Brazil', 'Brasil'); }

  function keyExtractor(value: Feature) { return value.id; }

  function handleButtonClick() {
    center[0] = authStore.user!.location.coordinates[0];
    center[1] = authStore.user!.location.coordinates[1];
    setActive(true);
  }

  function hancleCloseClick() { setActive(false); }

  async function submit() {
    setLoading(true);
    try {
      const res = await api.patch('users/edit-location', {
        latitude: center[0],
        longitude: center[1],
      });

      if (res.data.locationFound) {
        snackStore.setSnack({
          severity: 'success',
          text: 'Localização alterada com sucesso',
        });
        setActive(false);
      } else {
        snackStore.setSnack({
          severity: 'error',
          text: 'Desculpe, mas não oferecemos suporte a esse local',
        });
      }

      authStore.user = res.data.user;
    } catch (err) {
      snackStore.setSnack({
        severity: 'error',
        text: 'Erro ao mudar localicação',
      });
    }
    setLoading(false);
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>
        <div className="flex flex-row items-center m-2 cursor-pointer gap-1">
          <FaMapMarkerAlt size={20} color="#080" />
          <div className="font-semibold" style={{ color: '#080' }}>
            {text || 'Selecionar local'}
          </div>
        </div>
      </Button>
      {active && (
      <div
        className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-black bg-opacity-50"
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col max-h-screen bg-white w-full max-w-3xl rounded-none md:rounded-lg shadow-xl">
          <div className="px-2 pb-2">
            <div className="h-12 flex flex-row items-center justify-between">
              <div className="pl-1">Sua localização</div>
              <IconButton
                disabled={loading}
                onClick={hancleCloseClick}
              >
                <GrClose size={18} />
              </IconButton>
            </div>
            <AutoCompleteInput
              getText={getText}
              onChange={handleChange}
              ketExtractor={keyExtractor}
              getOptions={getFeaturesByText}
            />
          </div>
          <div className="h-screen flex flex-col relative z-10">
            <div
              className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center select-none pointer-events-none"
              style={{ zIndex: 500 }}
            >
              <Image width={40} height={40} src="/map_center.png" />
            </div>
            <Map center={center!} />
          </div>
          <div className="p-1 flex flex-row justify-end gap-4">
            <Button
              disabled={loading}
              onClick={hancleCloseClick}
              className="h-12 flex-1 sm:flex-none px-5"
            >
              Cancelar
            </Button>
            <Button
              disabled={loading}
              variant="contained"
              onClick={submit}
              className="h-12 flex-1 sm:flex-none px-5 flex flex-row gap-1"
            >
              {loading && <Spinner stroke={4} color="#16A34A" />}
              Salvar
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
