import axios from "axios";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Header } from "../common/Header";
import { useData } from "../mobx/DataContext";
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

  const { auth } = useData();

  return (
    <div>
      <Header />
      <div>{JSON.stringify(auth.user)}</div>
      <div className="pt-1">
        {data.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
        {JSON.stringify(data)}
        <div className=" z-20 fixed bottom-6 right-6">
          <AddButton />
        </div>
      </div>
    </div>
  );
});
