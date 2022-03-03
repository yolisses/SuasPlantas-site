import { Message } from './Message';

export interface Chat {
    name: string
    input:string
    image: string
    userId: number
    messages:Message[]
    lastMessage?:Message
}
