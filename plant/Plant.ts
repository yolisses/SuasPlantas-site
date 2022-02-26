import { User } from '../user/User';
import { Image } from '../upload/Image';

export type PlantId = number;

export interface Tag{
  name:string
}

export interface Plant {
  user: User
  tags: Tag[]
  id: PlantId
  name: string
  amount:number
  card?: string
  preview?:true
  swap: boolean
  liked?:boolean
  images: Image[]
  donate: boolean
  alsoSaw?:Plant[]
  createdAt: string
  updatedAt: string
  description: string
  price: string | null
}
