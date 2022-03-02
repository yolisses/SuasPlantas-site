import { generateArray } from './utils/generateArray';

const items = generateArray(100);
export function DevPage() {
  return (
    <div className="bg-red-100 p-2 gap-2 h-screen-no-header flex flex-row overflow-hidden">
      <div className="bg-green-100 p-2 w-full max-w-md overflow-y-auto">
        {items.map((value) => <div>{value}</div>)}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-emerald-100 p-3">
          header
        </div>
        <div className="bg-blue-100 flex-1 overflow-y-auto">
          {items.map((value) => <div>{value}</div>)}
        </div>
        <div className="bg-emerald-100 p-3">
          header
        </div>
      </div>
    </div>
  );
}
