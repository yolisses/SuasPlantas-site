import { Quest } from './Quest';
import { QuestItem } from './QuestItem';
import { HomePage } from '../home/HomePage';
import { useTour } from '../tour/TourContext';
import { AddButton } from '../home/AddButton';
import { questsContext } from './questsContext';
import { usePreview } from '../preview/PreviewContext';
import { questsTourSteps } from '../tour/questsTourSteps';

export function QuestsPage() {
  const { blockQuestsTour } = useTour();
  const { user } = usePreview();

  return (
    <HomePage
      tab="quests"
      tourName="Quests"
      context={questsContext}
      aditionalItems={user?.quests}
      firstActionButton={<AddButton url="quests/edit" />}
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
