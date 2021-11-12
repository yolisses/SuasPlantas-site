export function ShowScreen({ id }: { id: string }) {
  return (
    <div>
      <Image
        alt=""
        width={140}
        height={140}
        src={someImage + "1"}
        className="rounded-xl bg-gray-200"
      />
      <div>hello {id}!</div>
      <div>{Math.random()}</div>
    </div>
  );
}
