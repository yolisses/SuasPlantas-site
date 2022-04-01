import { loremIpsum } from '../mock/loremIpsum';

export function DevPage() {
  return (
    <div className="w-96">
      {loremIpsum}
      <div className="bg-red-400 sticky top-0">oie</div>
      {loremIpsum}
    </div>
  );
}
