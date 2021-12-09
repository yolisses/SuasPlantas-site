import { Plant } from "../types/Plant";

export interface User {
  id: UserId;
  name: string;
  lastName: string;
  firstName: string;
  description: string;
  plantSet: Plant[];
  picture: string;
  dateJoined: string;
}

export type UserId = number;
