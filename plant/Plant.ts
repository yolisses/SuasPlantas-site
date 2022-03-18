import { User } from '../user/User';
import { Image } from '../upload/Image';
import { AlsoSaw } from './AlsoSaw';

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
  swap: boolean
  liked?:boolean
  images: Image[]
  donate: boolean
  createdAt: string
  updatedAt: string
  alsoSaw?:AlsoSaw[]
  description: string
  price: string | null
  __typename: 'Official',
}
