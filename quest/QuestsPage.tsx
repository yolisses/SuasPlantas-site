import { QuestItem } from './QuestItem';
import { HomePage } from '../home/HomePage';
import { questsContext } from './questsContext';
import { PlantsInput } from '../home/input/PlantsInput';
import { useVocative } from '../home/input/useVocative';

export function QuestsPage() {
  const { vocative } = useVocative();

  return (
    <HomePage
      tab="quests"
      context={questsContext}
      topChildren={(
        <section className="max-w-xl">
          <PlantsInput
            text={(
              <span>
                Quais plantas você está
                {' '}
                <strong>procurando</strong>
                {vocative}
                ?
              </span>
)}
          />
        </section>
      )}
    >
      {(items) => (
        <div className="p-2 grid gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
          {!!items && items.map((item) => (
            <QuestItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
