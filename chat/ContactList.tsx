import Image from 'next/image';
import { mockContacts } from './mockContacts';

export function ContactList() {
  const imageSize = 60;
  return (
    <>
      { mockContacts.map((contact) => (
        <button
          key={contact.otherUserId}
          className="highlight flex flex-row items-center gap-2 p-2 w-full rounded-md"
        >
          <Image
            className="rounded-full"
            objectFit="cover"
            src={contact.image}
            width={imageSize}
            height={imageSize}
          />
          <div className="text-left">
            <div>
              { contact.name}
            </div>
            <div className="text-gray-500">
              { contact.lastMessage.text}
            </div>
          </div>
        </button>
      ))}
    </>
  );
}
