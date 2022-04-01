import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';
import { SearchField } from '../search/SearchField';
import { LocationFilterInput } from './LocationFilterInput';
import { PostItem } from './PostItem';

export function NewHomePage() {
  const { items: plants } = usePlants();
  const { items: quests } = useQuests();

  if (!plants || !quests) return null;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-2 mx-auto">
        <div className="center-row">
          <div className="max-w-md">
            <SearchField />
          </div>
          <LocationFilterInput />
        </div>
        {[...plants, ...quests].map((item) => (
          <PostItem item={item} />
        ))}
      </div>
      <div className="max-w-md bg-red-200">
        outras coisas aqui
      </div>
    </div>
  );
}
