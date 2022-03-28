import {
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {
  FaRegUser,
  FaSeedling,
  FaThumbsUp,
  FaQuestion,
} from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { User } from './User';
import { userImage } from '../images/user';
import { useUser } from '../auth/userContext';
import { PlantItem } from '../common/PlantItem';
import { TabSelector } from '../common/TabSelector';
import { MessageButton } from '../chat/MessageButton';
import { ContactsIndicator } from '../plant/ContactsIndicator';

interface UserPageProps {
  user: User;
  mini?:boolean
  footer?:boolean
}

interface TabProps{
  tab:string
  currentTab:string
  children:ReactNode
}

function Tab({ tab, currentTab, children }:TabProps) {
  return (
    <div
      className="center-col"
      style={{ display: tab !== currentTab ? 'none' : undefined }}
    >
      {children}
    </div>
  );
}

export function UserPage({ user, mini, footer }: UserPageProps) {
  const [tab, setTab] = useState('plants');
  const { refreshUser } = useUser();
  const { push } = useRouter();
  const { user: actualUser } = useUser();

  const selfUser = actualUser?.id === user?.id;

  useEffect(() => {
    if (selfUser) refreshUser();
  }, []);

  useEffect(() => {
    if (!user) { push('/'); }
  }, [user]);

  if (!user) return null;

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Usuário ${user.name}. ${user.city}, ${user.state}. ${user.description}`}
        />
      </Head>
      <div className="flex pt-2 flex-col items-center w-full">
        <div className="p-2 flex flex-col gap-4 max-w-5xl w-full items-center">
          <div className="flex flex-row gap-2 items-center w-full max-w-4xl">
            <Image
              width={100}
              height={100}
              objectFit="cover"
              alt={user.name}
              src={user.image || userImage}
              className="rounded-full bg-cover w-24 h-24 bg-gray-50"
            />
            <div className="flex-1 flex-wrap flex overflow-ellipsis">
              <div className="flex flex-col w-full">
                <div>
                  <span className="overflow-ellipsis text-lg">{user.name}</span>
                </div>
                <div className="overflow-ellipsis">{`${user.city}, ${user.state}`}</div>
              </div>
            </div>
          </div>
          {!selfUser && <MessageButton user={user} />}
          <div className="flex flex-row w-full justify-center gap-2">
            <ContactsIndicator user={user} />
          </div>
          <div>
            { user.description}
          </div>
          {selfUser && (
          <div className="flex flex-row justify-start">
            <Link href="/account/edit">
              <a className="secondary-button p-2 rounded-lg border border-green-500">
                <FaRegUser size={18} />
                Editar perfil
              </a>
            </Link>
          </div>
          )}
          <div className="flex flex-row justify-center items-center max-w-sm md:max-w-md">
            <TabSelector
              tab={tab}
              value="plants"
              setTab={setTab}
              Icon={FaSeedling}
            >
              Plantas
            </TabSelector>
            <TabSelector
              tab={tab}
              value="quests"
              setTab={setTab}
              Icon={FaQuestion}
            >
              Procurando
            </TabSelector>
            <TabSelector
              tab={tab}
              value="likes"
              setTab={setTab}
              Icon={FaThumbsUp}
            >
              Curtidas
            </TabSelector>
          </div>
          <Tab tab="plants" currentTab={tab}>
            <ItemsDrawer
              mini={mini}
              items={user.plants}
              withoutItemsMessage="Nenhuma planta por enquanto"
            />
          </Tab>
          <Tab tab="likes" currentTab={tab}>
            <ItemsDrawer
              mini={mini}
              items={user.likedPlants}
              withoutItemsMessage="Nenhuma curtida por enquanto"
            />
          </Tab>
          <Tab tab="quests" currentTab={tab}>
            <QuestsDrawer
              mini={mini}
              items={user.quests}
              withoutItemsMessage="Nenhum procurando por enquanto"
            />
          </Tab>
        </div>
      </div>
    </>
  );
}

interface ItemsDrawerProps{
  items:any[]
  mini?:boolean
  withoutItemsMessage:string
}

function ItemsDrawer({ items, mini, withoutItemsMessage }:ItemsDrawerProps) {
  if (items && items.length) {
    return (
      <div
        className={`grid gap-2 grid-cols-2 ${mini ? 'md:grid-cols-3' : 'md:grid-cols-5'}`}
      >
        { items.map((item) => (
          <PlantItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
  return (
    <div className="text-gray-600 p-10">
      {withoutItemsMessage}
    </div>
  );
}

function QuestsDrawer({ items, withoutItemsMessage }:ItemsDrawerProps) {
  if (items && items.length) {
    return (
      <div
        className="flex flex-row flex-wrap gap-1 max-w-2xl justify-center"
      >
        { items.map((item) => (
          <div key={item.id} className="bg-gray-300 p-2 rounded-lg md:px-4">
            {item.name}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="text-gray-600 p-10">
      {withoutItemsMessage}
    </div>
  );
}
