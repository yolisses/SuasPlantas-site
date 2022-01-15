export function ConfigPage() {
  function handleClick() { }

  return (
    <div
      onClick={handleClick}
      className="p-3 hover:bg-black hover:bg-opacity-5 m-2 rounded-lg cursor-pointer text-red-500"
    >
      Log Out
    </div>
  );
}
