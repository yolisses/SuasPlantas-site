import { User, UserId } from '../user/User';

export interface Quest{
    id:number
    user:User
    name:string
    userId:UserId
    createdAt: string
    updatedAt: string
}
