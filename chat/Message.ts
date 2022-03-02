import { User } from '../user/User';
import { Chat } from './Chat';

export interface Message{
    id: number,
    chat?:Chat,
    text: string,
    sender?: User,
    chatId: number,
    senderId: number,
    createdAt:string,
}
