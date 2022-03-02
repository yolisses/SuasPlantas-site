import Image from 'next/image';
import { Spinner } from '../common/Spinner';
import { someImage } from '../mock/someImage';
import { useChats } from './ChatsContext';
import { mockContacts } from './mockContacts';

export function ContactList() {
  const { chats, loading } = useChats();
  const imageSize = 60;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      { !!chats && chats.map((contact) => (
        <button
          key={contact.id}
          className="highlight flex flex-row items-center gap-2 p-2 w-full rounded-md"
        >
          <Image
            className="rounded-full"
            objectFit="cover"
            src={someImage}
            width={imageSize}
            height={imageSize}
          />
          <div className="text-left">
            <div>
              { contact.name}
            </div>
            <div className="text-gray-500">
              { contact.lastText}
            </div>
          </div>
        </button>
      ))}
    </>
  );
}
