import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { LatLngTuple } from 'leaflet';
import { Button } from '@mui/material';
import { EmphasisButton } from '../forms/EmphasisButton';
import { HeaderLayout } from '../common/HeaderLayout';
import { Feature } from './Feature';
import { AutoCompleteInput } from './AutoCompleteInput';
import Map from './Map';

function SelectLocationScreen() {
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
    <div className="flex flex-col flex-1 min-h-screen">
      <HeaderLayout>
        <div>Sua localização</div>
      </HeaderLayout>
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
      <div className="p-1 flex flex-col items-center">
        <Button className="w-full h-11 max-w-sm" variant="contained">
          Salvar
        </Button>
      </div>
    </div>
  );
}

export default SelectLocationScreen;
