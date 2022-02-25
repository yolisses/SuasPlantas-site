import { useUser } from '../auth/userContext';
import { LocationField } from '../location/LocationField';

export function LocationFilterInput() {
  const { user } = useUser();
  const radiusOptions = [1, 2, 5, 10, 20, 40, 60, 80, 100, 250, 500];
  return (
    <LocationField
      submit={async () => true}
      text="Cajazeiras, Paraíba"
      title="Filtrar por distância"
      radiusOptions={radiusOptions}
      initialLocation={user?.location.coordinates}
    />
  );
}
