import { useState } from 'react';
import { api } from '../api/api';
import { useLocation } from '../location/LocationContext';
import { LocationField, SelectLocationResult } from '../location/LocationField';

export function LocationFilterInput() {
  const { text, location, setLocation } = useLocation();
  const radiusOptions = [1, 2, 5, 10, 20, 40, 60, 80, 100, 250, 500];
  const defaultPosition:[number, number] = [-23.9618, -46.3322]; // Santos, SP

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
    setLocation({
      city,
      state,
      position,
      radius: radius!,
    });
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
