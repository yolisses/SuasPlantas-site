import { UserId } from '../user/User';

type NotificationId = number

export interface Notification{
    id:NotificationId
    userId:UserId
    entityId:number
    entity:any
    createdAt:string
    viewed:boolean
}
