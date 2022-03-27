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
        <TabSelector id="tour_tab_plants" tab="plants" value={tab}>
          <FaSeedling />
          {' '}
          Plantas
        </TabSelector>
      </Link>
      <Link href="/quests">
        <TabSelector id="tour_tab_quests" tab="quests" value={tab}>
          <FaQuestion />
          Procurando
        </TabSelector>
      </Link>
      <Link href="/users">
        <TabSelector id="tour_tab_users" tab="users" value={tab}>
          <FaUserFriends />
          Pessoas
        </TabSelector>
      </Link>
    </div>
  );
}
