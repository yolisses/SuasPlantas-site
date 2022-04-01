import { Image } from '../upload/Image';
import { User, UserId } from '../user/User';

export interface Quest{
    id:number
    user:User
    name:string
    userId:UserId
    card?: string
    images?: Image[]
    createdAt: string
    updatedAt: string
}
