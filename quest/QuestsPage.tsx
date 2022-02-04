import { Quest } from './Quest';
import { QuestItem } from './QuestItem';
import { HomePage } from '../home/HomePage';
import { questsContext } from './questsContext';
import { questsTourSteps } from '../tour/questsTourSteps';
import { useTour } from '../tour/TourContext';
import { usePreview } from '../preview/PreviewContext';

export function QuestsPage() {
  const { blockQuestsTour } = useTour();
  const { user } = usePreview();

  return (
    <HomePage
      tab="quests"
      tourName="Quests"
      fabPath="quests/edit"
      context={questsContext}
      aditionalItems={user?.quests}
      tourSteps={!blockQuestsTour ? questsTourSteps : undefined}
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
