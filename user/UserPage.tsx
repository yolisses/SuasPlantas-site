import {
  useState,
  useEffect,
} from 'react';
import {
  FaQuestion,
  FaRegUser,
  FaSeedling,
  FaThumbsUp,
} from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdLogout } from 'react-icons/md';

import { User } from './User';
import { red800 } from '../common/colors';
import { userImage } from '../images/user';
import { useUser } from '../auth/UserContext';
import { PlantItem } from '../common/PlantItem';
import { TabSelector } from '../common/TabSelector';
import { MessageButton } from '../chat/MessageButton';
import { ContactsIndicator } from '../plant/ContactsIndicator';

type TabsEnum = 'plants'|'quests'|'likes'

interface UserPageProps {
  user: User
  mini?:boolean
  hideLogout?:boolean
}

export function UserPage({ user, mini, hideLogout }: UserPageProps) {
  const { push } = useRouter();
  const { refreshUser } = useUser();
  const { user: actualUser, logOut } = useUser();

  const [tab, setTab] = useState<TabsEnum>('plants');

  const itemsByTab = {
    likes: user.likedPlants,
    quests: user.plants.filter((plant) => plant.quest),
    plants: user.plants.filter((plant) => !plant.quest),
  };
  const items = itemsByTab[tab];
  const selfUser = actualUser?.id === user.id;

  function handleLogoutClick() { logOut(); }

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
      <div className="flex flex-col items-center w-full">
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
                <div className="w-full flex flex-row">
                  <span className="overflow-ellipsis text-lg">{user.name}</span>
                  {selfUser && !hideLogout && (
                  <button className="secondary-button text-red-800 gap-1 p-1 ml-auto self-start" onClick={handleLogoutClick}>
                    <MdLogout color={red800} />
                    Sair
                  </button>
                  )}
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
              Icon={FaSeedling}
              setTab={setTab as any}
            >
              Plantas
            </TabSelector>
            <TabSelector
              tab={tab}
              value="quests"
              Icon={FaQuestion}
              setTab={setTab as any}
            >
              Procurando
            </TabSelector>
            <TabSelector
              tab={tab}
              value="likes"
              Icon={FaThumbsUp}
              setTab={setTab as any}
            >
              Curtidas
            </TabSelector>
          </div>
          {(items && items.length) ? (
            <div
              className={`grid gap-2 grid-cols-2 ${mini ? 'md:grid-cols-3' : 'md:grid-cols-5'}`}
            >
              { items.map((item) => (
                <PlantItem item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="text-gray-600 p-10">
              Nenhum resultado aqui, por enquanto
            </div>
          )}
        </div>
      </div>
    </>
  );
}
