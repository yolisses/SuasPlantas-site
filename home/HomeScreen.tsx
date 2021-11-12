import axios from "axios";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Header } from "../common/Header";
import { Plant } from "../types/Plant";
import { AddButton } from "./AddButton";
import { ListItem } from "./ListItem";

interface HomeScreenProps {
  data: Plant[];
}

export const HomeScreen = observer(({ data }: HomeScreenProps) => {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/plants");
        console.error(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <Header />
      <div className="p-1 flex flex-col gap-1">
        {data.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </div>
  );
});
