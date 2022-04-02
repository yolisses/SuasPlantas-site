import { useState } from 'react';
import { api } from '../api/api';
import { Location } from './Location';
import { interact } from '../interactions/interact';
import { useLocation } from './LocationContext';
import { defaultPosition } from './defaultPosition';
import { LocationField, SelectLocationResult } from './LocationField';

export function LocationFilterInput() {
  const { text, location, setLocation } = useLocation();
  const radiusOptions = [1, 2, 5, 10, 20, 40, 60, 80, 100, 250, 500];

  const [loading, setLoading] = useState(false);

  async function handleSubmit({ radius, position }:SelectLocationResult) {
    setLoading(true);
    const res = await api.get('location/name', {
      params: {
        latitude: position[0],
        longitude: position[1],
      },
    });
    const { city, state } = res.data;
    const location :Location = {
      city,
      state,
      position,
      radius: radius!,
    };
    interact({ type: 'set location', location });
    setLocation(location);
    setLoading(false);
    return true;
  }

  return (
    <LocationField
      loading={loading}
      submit={handleSubmit}
      title="Filtrar por distância"
      radiusOptions={radiusOptions}
      initialRadius={location?.radius}
      text={(text) || 'Selecione a localização'}
      initialLocation={location?.position || defaultPosition}
    />
  );
}
