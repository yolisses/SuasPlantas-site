import { mockMessages } from './mockMessages';

export function MessagesList() {
  return (
    <>
      {mockMessages.map((message) => (
        <div className={`py-1 px-2  rounded-lg ${
          message.userId === 0
            ? 'bg-green-100 self-end'
            : 'bg-gray-200 self-start'} `}
        >
          {message.text}
        </div>
      ))}
    </>
  );
}
