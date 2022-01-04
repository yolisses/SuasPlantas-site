import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { LatLngTuple } from 'leaflet';
import { GrClose } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Button, IconButton } from '@mui/material';

import { Feature } from './Feature';
import { AutoCompleteInput } from './AutoCompleteInput';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface LocationFieldProps{
    text:string
}

export function LocationField({ text }:LocationFieldProps) {
  const centerSize = 40;
  const [active, setActive] = useState(false);
  const [center, setCenter] = useState<LatLngTuple>([-69.761008, -26.783346]);
  console.log({ center });

  function handleChange(value: Feature) {
    console.log('handle select', value);
    setCenter(value.center.reverse() as LatLngTuple);
    console.log(value);
  }

  async function getFeaturesByText(text: string) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`;
    const res = await axios.get(url, {
      params: { access_token: process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN },
    });
    return res.data.features as Feature[];
  }

  function getText(value: Feature) {
    return value.place_name.replace('Brazil', 'Brasil');
  }

  function keyExtractor(value: Feature) {
    return value.id;
  }

  function handleButtonClick() {
    setActive(true);
  }

  function hancleCloseClick() {
    setActive(false);
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
            <div className="h-12 flex flex-row items-center">
              <span className="pl-1">Sua localização</span>
              <IconButton className="ml-auto" onClick={hancleCloseClick}>
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
          <div className="h-screen flex flex-col relative">
            <div
              className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center select-none pointer-events-none"
              style={{ zIndex: 500 }}
            >
              <Image src="/map_center.png" width={centerSize} height={centerSize} />
            </div>
            <Map />
          </div>
          <div className="p-1 flex flex-row justify-end gap-4">

            <Button className="h-12 flex-1 sm:flex-none px-5" onClick={hancleCloseClick}>
              Cancelar
            </Button>
            <Button className="h-12 flex-1 sm:flex-none px-5" variant="contained">
              Selecionar
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
