import { AddButton } from "./AddButton";
import { ListItem } from "./ListItem";

export function HomeScreen() {
  const data = [...new Array(20)];
  return (
    <div className="pt-1">
      {data.map((key, index) => (
        <ListItem key={index} />
      ))}
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </div>
  );
}
