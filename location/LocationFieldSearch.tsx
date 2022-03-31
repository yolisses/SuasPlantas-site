import { Dispatch, SetStateAction } from 'react';

import { LatLng } from './LatLng';
import { Feature } from './Feature';
import { AutoCompleteInput } from './AutoCompleteInput';
import { getFeaturesByText } from './getFeaturesByText';

export interface SelectLocationResult{
    radius?:number
    position:[number, number]
}

interface LocationFieldProps{
  setCenter:Dispatch<SetStateAction<LatLng>>
}

export function LocationField({
  setCenter,
}:LocationFieldProps) {
  function handleChange(value: Feature) {
    setCenter([value.center[1], value.center[0]]);
  }

  function getText(value: Feature) { return value.place_name.replace('Brazil', 'Brasil'); }

  function keyExtractor(value: Feature) { return value.id; }

  return (
    <AutoCompleteInput
      getText={getText}
      onChange={handleChange}
      ketExtractor={keyExtractor}
      getOptions={getFeaturesByText}
    />
  );
}
