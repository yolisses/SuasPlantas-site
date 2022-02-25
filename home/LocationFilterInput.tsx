import { LocationField } from '../location/LocationField';
import { useLocationFilter } from '../location/LocationFilterContext';

export function LocationFilterInput() {
  const { text, location } = useLocationFilter();

  const radiusOptions = [1, 2, 5, 10, 20, 40, 60, 80, 100, 250, 500];
  return (
    <LocationField
      submit={async () => true}
      title="Filtrar por distância"
      radiusOptions={radiusOptions}
      initialLocation={location?.coordinates || [-23.9618, -46.3322]}
      text={text || 'Selecione a localização'}
    />
  );
}
