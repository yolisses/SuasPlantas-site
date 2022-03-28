import {
  FaQuestion,
  FaSeedling,
  FaUserFriends,
} from 'react-icons/fa';
import Link from 'next/link';
import { TabSelector } from './TabSelector';

export type TopTab = 'plants'|'quests'|'users'|'map'

interface TopTabsProps{
    tab: TopTab
}

export function TopTabs({ tab }: TopTabsProps) {
  return (
    <div className="flex flex-row flex-wrap" id="tour_top_tabs">
      <Link href="/">
        <TabSelector
          value={tab}
          tab="plants"
          Icon={FaSeedling}
          id="tour_tab_plants"
        >
          Plantas
        </TabSelector>
      </Link>
      <Link href="/quests">
        <TabSelector
          value={tab}
          tab="quests"
          Icon={FaQuestion}
          id="tour_tab_quests"
        >
          Procurando
        </TabSelector>
      </Link>
      <Link href="/users">
        <TabSelector
          value={tab}
          tab="users"
          id="tour_tab_users"
          Icon={FaUserFriends}
        >
          Pessoas
        </TabSelector>
      </Link>
    </div>
  );
}
