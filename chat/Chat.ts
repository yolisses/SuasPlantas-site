import { Message } from './Message';

export interface Chat {
    name: string
    image: string
    userId: number
    messages:Message[]
    lastMessage?:Message
}
