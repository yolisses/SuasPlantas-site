import { User } from '../user/User';
import { Image } from './Image';

export interface Plant {
  id: PlantId;
  name: string;
  amount:number;
  description: string;
  user: User;
  card: string;
  tags: string[];
  images: Image[];
  donate: boolean;
  swap: boolean;
  price: string | null;
  createdAt: string;
  updatedAt: string;
}

export type PlantId = number;
