import { auth } from "../auth/auth";
import { AddButton } from "./AddButton";
import { ListItem } from "./ListItem";

export function HomeScreen({ data }) {
  return (
    <div className="pt-1">
      {/* {data.map((item, index) => (
        <ListItem key={index} {...item} />
      ))} */}
      {JSON.stringify(data)}
      {JSON.stringify(auth.user)}
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </div>
  );
}
