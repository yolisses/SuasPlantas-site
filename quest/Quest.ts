import { User, UserId } from '../user/User';

export interface Quest{
    id:number
    name:string
    user:User
    userId:UserId
    preview?:true
}
