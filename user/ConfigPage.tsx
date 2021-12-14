import { Header } from "../common/Header";

export function ConfigPage() {
  function handleClick() {}

  return (
    <div>
      <Header />
      <div
        onClick={handleClick}
        className="p-3 hover:bg-black hover:bg-opacity-5 m-2 rounded-lg cursor-pointer text-red-500"
      >
        Log Out
      </div>
    </div>
  );
}
