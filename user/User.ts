import { Plant } from "../types/Plant";

export interface User {
  id: UserId;
  name: string;
  description: string;
  plants?: Plant[];
  image: string;
}

export type UserId = number;
