import { User } from "../user/User";

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
  owner?: User;
}

export type PlantId = number;
