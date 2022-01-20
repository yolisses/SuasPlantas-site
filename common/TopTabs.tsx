import {
  FaQuestion, FaSeedling, FaUserFriends, FaUsers,
} from 'react-icons/fa';
import { Link } from './Link';
import { TabSelector } from './TabSelector';

export type TopTab = 'plants'|'quests'|'users'|'map'

interface TopTabsProps{
    tab: TopTab
}

export function TopTabs({ tab }: TopTabsProps) {
  return (
    <div className="flex flex-row flex-wrap">
      <Link href="/">
        <TabSelector tab="plants" value={tab}>
          <FaSeedling />
          {' '}
          Plantas
        </TabSelector>
      </Link>
      <Link href="/quests">
        <TabSelector tab="quests" value={tab}>
          <FaQuestion />
          Procurando
        </TabSelector>
      </Link>
      <Link href="/users">
        <TabSelector tab="users" value={tab}>
          <FaUserFriends />
          Pessoas
        </TabSelector>
      </Link>
      {/* <Link href="/users">
        <TabSelector tab="users" value={tab}>
          <FaUser />
          Pessoas
        </TabSelector>
      </Link>
      <Link href="/map">
        <TabSelector tab="map" value={tab}>
          <FaMap />
          Mapa
        </TabSelector>
      </Link> */}
    </div>
  );
}
