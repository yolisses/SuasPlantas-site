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
        {[...plants, ...quests].map((item) => (
          <PostItem item={item} />
        ))}
      </div>
      <div className="max-w-[18rem] w-full">
        <div className="flex flex-col sticky p-2 gap-2 top-0 border-l h-screen border-gray-200">
          <SearchField />
          <LocationFilterInput />
        </div>
      </div>
    </div>
  );
}
