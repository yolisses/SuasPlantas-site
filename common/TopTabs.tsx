import {
  FaQuestion, FaSeedling, FaUserFriends, FaUsers,
} from 'react-icons/fa';
import { useIsLogged } from '../auth/useIsLogged';
import { usePreview } from '../preview/PreviewContext';
import { Link } from './Link';
import { TabSelector } from './TabSelector';

export type TopTab = 'plants'|'quests'|'users'|'map'

interface TopTabsProps{
    tab: TopTab
}

export function TopTabs({ tab }: TopTabsProps) {
  const { isLogged } = useIsLogged();
  const { user: previewUser } = usePreview();

  return (
    <div className="flex flex-row flex-wrap bg-white" id="tour_top_tabs">
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
          {/* <div className="relative">
            <div
              className="absolute -top-6 -right-6 text-white bg-emerald-500 px-1 rounded-md"
              style={{ fontSize: '0.8rem' }}
            >
              novo
            </div>
          </div> */}
        </TabSelector>
      </Link>
      <Link
        href="/users"
        onClick={(e) => {
          if (!previewUser && !isLogged()) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <TabSelector id="tour_tab_users" tab="users" value={tab}>
          <FaUserFriends />
          Pessoas
        </TabSelector>
      </Link>
    </div>
  );
}
