import { Plant } from "../types/Plant";

export interface User {
  id: UserId;
  name: string;
  description: string;
  plantSet: Plant[];
  picture: string;
}

export type UserId = number;
