import { User } from '../user/User';
import { Chat } from './Chat';

export interface Message{
    id: number,
    chat?:Chat,
    text: string,
    sender?: User,
    senderId: number,
    receiver?: User,
    receiverId: number,
    createdAt:string,
}
