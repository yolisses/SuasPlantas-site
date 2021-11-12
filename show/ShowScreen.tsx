export function ShowScreen({ id }: { id: string }) {
  return (
    <div>
      <div>hello {id}!</div>
      <div>{Math.random()}</div>
    </div>
  );
}
