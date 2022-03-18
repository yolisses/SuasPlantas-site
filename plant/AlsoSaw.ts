import { User } from '../user/User';

export interface AlsoSaw{
    id:number
    user?:User
    name:string
    rank?:number
    card?:string
    city?:string
    state?:string
}
