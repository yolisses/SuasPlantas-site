import {
  FaQuestion,
  FaSeedling,
} from 'react-icons/fa';
import Link from 'next/link';
import { TabSelector } from './TabSelector';

export type TopTab = 'plants'|'quests'|'users'|'map'

interface TopTabsProps{
    tab: TopTab
}

export function TopTabs({ tab }: TopTabsProps) {
  return (
    <div className="flex flex-row flex-wrap">
      <Link href="/">
        <TabSelector
          value={tab}
          tab="plants"
          Icon={FaSeedling}
        >
          Plantas
        </TabSelector>
      </Link>
      <Link href="/quests">
        <TabSelector
          value={tab}
          tab="quests"
          Icon={FaQuestion}
        >
          Procurando
        </TabSelector>
      </Link>
    </div>
  );
}
