import { useUser } from '../../auth/UserContext';
import { Chip } from './Chip';

export function UserPlantsReminder() {
  const maxPlants = 7;
  const { user } = useUser();
  return (
    <div>
      <div>Já adicionadas</div>
      <div className="flex-1 flex flex-row flex-wrap h-fit gap-1.5 overflow-hidden max-w-md">
        {user?.plants.slice(0, maxPlants).map(({ name, card }) => (
          <Chip text={name} image={card} />
        ))}
        {user && user.plants.length > maxPlants && (
        <Chip text={`+${user.plants.length - maxPlants} outras`} />
        )}
      </div>
    </div>

  );
}
