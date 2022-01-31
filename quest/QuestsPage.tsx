import { Quest } from './Quest';
import { QuestItem } from './QuestItem';
import { HomePage } from '../home/HomePage';
import { questsContext } from './questsContext';
import { questsTourSteps } from '../tour/questsTourSteps';

export function QuestsPage() {
  return (
    <HomePage
      tab="quests"
      fabPath="quests/edit"
      context={questsContext}
      tourSteps={questsTourSteps}
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
