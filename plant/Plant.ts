import { User } from '../user/User';
import { Image } from '../upload/Image';

export type PlantId = number;

export interface Tag{
  name:string
}

export interface Plant {
  id: PlantId;
  name: string;
  amount:number;
  description: string;
  user: User;
  card: string;
  tags: Tag[];
  images: Image[];
  donate: boolean;
  swap: boolean;
  price: string | null;
  createdAt: string;
  updatedAt: string;
  liked?:boolean
  alsoSaw?:Plant[]
  state: string;
  city: string;
  preview?:true
}
