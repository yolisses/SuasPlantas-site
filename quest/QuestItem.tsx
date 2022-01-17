import { Quest } from './Quest';

export function QuestItem({ item }:{item:Quest}) {
  return (
    <div className="p-4 md:px-10 rounded-full bg-gray-300 text-center shadow-md">
      {item.name}
    </div>
  );
}
