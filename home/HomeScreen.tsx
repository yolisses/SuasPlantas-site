import { observer } from "mobx-react";
import { Header } from "../common/Header";
import { SelectLocationLink } from "../location/SelectLocationLink";
import { Plant } from "../types/Plant";
import { AddButton } from "./AddButton";
import { ListItem } from "../common/ListItem";

interface HomeScreenProps {
  data: Plant[];
}

export const HomeScreen = observer(({ data }: HomeScreenProps) => {
  return (
    <>
      <Header />
      <SelectLocationLink />
      <div className="p-1 flex flex-col gap-1">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </>
  );
});
