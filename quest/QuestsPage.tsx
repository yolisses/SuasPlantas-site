import { TopTabs } from '../common/TopTabs';
import { SearchField } from '../search/SearchField';

export function QuestPage() {
  return (
    <div>
      <div className="md:pl-2 flex flex-col-reverse md:flex-row items-center justify-between">
        <SearchField />
        <TopTabs tab="quests" />
      </div>
    </div>
  );
}
