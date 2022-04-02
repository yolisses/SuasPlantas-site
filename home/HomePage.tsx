import { PostItem } from './PostItem';
import { useSize } from '../common/SizeContext';
import { PlantsInput } from './input/PlantsInput';
import { usePlants } from '../plant/plantsContext';
import { SearchField } from '../search/SearchField';
import { WelcomePage } from '../welcome/WelcomePage';
import { useWelcome } from '../welcome/WelcomeContext';
import { LocationFilterInput } from '../location/LocationFilterInput';

export function HomePage() {
  const { shouldPass } = useWelcome();
  const { items: plants } = usePlants();

  const { lg } = useSize();

  if (!shouldPass) return <WelcomePage />;

  if (!plants) return null;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-2 p-2 flex-1">
        <PlantsInput />
        {!lg && (
        <div className="flex flex-col gap-2">
          <SearchField />
          <LocationFilterInput />
        </div>
        )}
        <div className="flex flex-col gap-4">
          {plants
            .sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
            .map((item) => (
              <PostItem item={item} />
            ))}
        </div>
      </div>
      {lg && (
      <div className="w-80">
        <div className="fixed w-80 p-2 flex flex-col gap-2 top-0 border-l border-gray-200 h-screen">
          <SearchField />
          <LocationFilterInput />
        </div>
      </div>
      )}
    </div>
  );
}
