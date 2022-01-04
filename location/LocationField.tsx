import { Button, IconButton, Modal } from '@mui/material';
import axios from 'axios';
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { LatLngTuple } from 'leaflet';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { GrClose } from 'react-icons/gr';
import { Feature } from './Feature';
import { AutoCompleteInput } from './AutoCompleteInput';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface LocationFieldProps{
    text:string
}

export function LocationField({ text }:LocationFieldProps) {
  const centerSize = 40;
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

  return (
    <div>
      <Button>
        <div className="flex flex-row items-center m-2 cursor-pointer gap-1">
          <FaMapMarkerAlt size={20} color="#080" />
          <div className="font-semibold" style={{ color: '#080' }}>
            {text || 'Selecionar local'}
          </div>
        </div>
      </Button>
      <div className="fixed top-0 bottom-0 left-0 right-0 lg:p-10 flex flex-col justify-center items-center bg-black bg-opacity-50" style={{ zIndex: 10000 }}>
        <div className="flex flex-col flex-1 bg-white w-full max-w-3xl rounded-none md:rounded-lg shadow-xl">
          <div className="px-2 h-12 flex flex-row items-center">
            <div className="pl-1">
              Sua localização
            </div>
            <IconButton className="ml-auto">
              <GrClose size={18} />
            </IconButton>
          </div>
          <div className="p-2">
            <AutoCompleteInput
              ketExtractor={keyExtractor}
              getText={getText}
              getOptions={getFeaturesByText}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col flex-1 relative">
            <div className="flex-1 bg-green-300 flex flex-col relative z-0">
              <Map center={center} />
            </div>
            <div className="absolute z-20 w-full select-none flex flex-col justify-center items-center top-0 bottom-0 pointer-events-none">
              <Image src="/map_center.png" width={centerSize} height={centerSize} />
            </div>
          </div>
          <div className="p-1 flex flex-row justify-end gap-4">
            <Button className="h-12 flex-1 sm:flex-none px-5">
              Cancelar
            </Button>
            <Button className="h-12 flex-1 sm:flex-none px-5" variant="contained">
              Selecionar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
