import { HomePage } from '../home/HomePage';
import { Quest } from './Quest';
import { QuestItem } from './QuestItem';
import { questsContext } from './questsContext';

export function QuestsPage() {
  return (
    <HomePage
      tab="quests"
      context={questsContext}
      fabPath="quests/edit"
    >
      {(items) => (
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-5 xl:px-20">
          {!!items && items.map((item: Quest) => (
            <QuestItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
