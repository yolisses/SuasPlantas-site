import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Header } from "../common/Header";
import { AddButton } from "./AddButton";
import { ListItem } from "./ListItem";

export function HomeScreen({ data = [12, 221, 21] }) {
  const { user } = useAuth();

  useEffect(()=>{
    
  },[])

  return (
    <div>
      <Header />
      <div className="pt-1">
        {data.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
        {JSON.stringify(data)}
        <div className=" z-20 fixed bottom-6 right-6">
          <AddButton />
        </div>
        <div>{JSON.stringify(user)}</div>
      </div>
    </div>
  );
}