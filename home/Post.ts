import { User } from '../user/User';

export interface Post{
    id:number
    user:User
    name:string
    card?:string
    createdAt:string
    type:'plant'|'quest'
}
