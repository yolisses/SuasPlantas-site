import { loremIpsum } from '../mock/loremIpsum';
import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';
import { SearchField } from '../search/SearchField';
import { PlantsInput } from './input/PlantsInput';
import { LocationFilterInput } from './LocationFilterInput';
import { PostItem } from './PostItem';

export function NewHomePage() {
  const { items: plants } = usePlants();
  const { items: quests } = useQuests();

  if (!plants || !quests) return null;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-2 p-2 flex-1">
        <PlantsInput />
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-2" />
        <div>
          {([...plants, ...quests])
            .sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
            .map((item) => (
              <PostItem item={item} />
            ))}
        </div>
      </div>
      <div className="w-80">
        <div className="w-80 p-2 flex flex-col gap-4 h-screen border-l border-gray-200 fixed top-0">
          <SearchField />
          <LocationFilterInput />
        </div>
      </div>
    </div>
  );
}
