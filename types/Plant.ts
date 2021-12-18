import { User } from "../user/User";
import { Image } from "./Image";

export interface Plant {
  id: PlantId;
  name: string;
  description: string;
  card: string;
  swap: boolean;
  donate: boolean;
  price: string | null;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  user: User;
  images: Image[];
}

export type PlantId = number;
