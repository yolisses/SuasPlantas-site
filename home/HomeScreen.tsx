import axios from "axios";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Header } from "../common/Header";
import { useData } from "../mobx/DataContext";
import { loremIpsum } from "../mock/loremIpsum";
import { Plant } from "../types/Plant";
import { AddButton } from "./AddButton";
import { ListItem } from "./ListItem";
import Image from "next/image";
import { someImage } from "../mock/someImage";

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
      <div className="pt-1" />
      {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
      <div className=" z-20 fixed bottom-6 right-6">
        <AddButton />
      </div>
    </div>
  );
});
