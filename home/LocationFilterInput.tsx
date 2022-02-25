import { LocationField } from '../location/LocationField';
import { useLocationFilter } from '../location/LocationFilterContext';

export function LocationFilterInput() {
  const { location, coordinates } = useLocationFilter();

  const radiusOptions = [1, 2, 5, 10, 20, 40, 60, 80, 100, 250, 500];
  return (
    <LocationField
      text={location!}
      submit={async () => true}
      title="Filtrar por distância"
      radiusOptions={radiusOptions}
      initialLocation={coordinates}
    />
  );
}
