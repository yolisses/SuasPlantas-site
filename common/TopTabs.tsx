import {
  FaMap, FaSearch, FaSeedling, FaUser,
} from 'react-icons/fa';
import { Link } from './Link';
import { TabSelector } from './TabSelector';

interface TopTabsProps{
    tab:string
}

export function TopTabs({ tab }: TopTabsProps) {
  return (
    <div className="flex flex-row flex-wrap">
      <Link href="/">
        <TabSelector tab="plants" value={tab}>
          <FaSeedling />
          Plantas
        </TabSelector>
      </Link>
      <Link href="/quest">
        <TabSelector tab="quests" value={tab}>
          <FaSearch />
          Procurando
        </TabSelector>
      </Link>
      <Link href="/users">
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
      </Link>
    </div>
  );
}