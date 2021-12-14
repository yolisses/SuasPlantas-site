export function DevScreen() {
  return (
    <div>
      {[...Array(100)].map((n, index) => (
        <div className="bg-green-400 m-1"> {index} oi</div>
      ))}
    </div>
  );
}
