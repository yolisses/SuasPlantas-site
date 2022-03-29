import { QuestItem } from './QuestItem';
import { HomePage } from '../home/HomePage';
import { questsContext } from './questsContext';
import { useVocative } from '../home/input/useVocative';
import { QuestsInput } from '../home/input/QuestsInput';

export function QuestsPage() {
  const { vocative } = useVocative();

  return (
    <HomePage
      tab="quests"
      context={questsContext}
      topChildren={(
        <section className="max-w-xl">
          <QuestsInput />
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
