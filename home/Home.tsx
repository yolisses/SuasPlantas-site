import { ListItem } from "./ListItem";

export function HomeScreen() {
  const data = [...new Array(20)];
  return (
    <div>
      {data.map((key) => (
        <ListItem key={key} />
      ))}
    </div>
  );
}
