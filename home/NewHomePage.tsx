import { useSize } from '../common/SizeContext';
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

  const { lg } = useSize();

  if (!plants || !quests) return null;
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
          {([...plants, ...quests])
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
