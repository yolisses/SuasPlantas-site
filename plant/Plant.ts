import { User } from '../user/User';
import { AlsoSaw } from './AlsoSaw';
import { Image } from '../upload/Image';

export type PlantId = number;

export interface Plant {
  user: User
  id: PlantId
  name: string
  card?: string
  quest:boolean
  liked?:boolean
  images: Image[]
  createdAt: string
  updatedAt: string
  alsoSaw?:AlsoSaw[]
  description: string
}
