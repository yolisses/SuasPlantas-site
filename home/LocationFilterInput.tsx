import { useLocation } from '../location/LocationContext';
import { LocationField } from '../location/LocationField';

export function LocationFilterInput() {
  const { text, location } = useLocation();
  const radiusOptions = [1, 2, 5, 10, 20, 40, 60, 80, 100, 250, 500];
  const defaultPosition:[number, number] = [-23.9618, -46.3322]; // Santos, SP
  return (
    <LocationField
      submit={async () => true}
      title="Filtrar por distância"
      radiusOptions={radiusOptions}
      text={text || 'Selecione a localização'}
      initialLocation={location?.position || defaultPosition}
    />
  );
}
