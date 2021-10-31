import { AddButton } from "./AddButton";
import { ListItem } from "./ListItem";

export function HomeScreen() {
  const data = [...new Array(20)];
  return (
    <div className="pt-1">
      {data.map((key) => (
        <ListItem key={key} />
      ))}
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </div>
  );
}
