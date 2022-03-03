import { Message } from './Message';

export interface Chat {
    text: string
    name: string
    image: string
    userId: number
    messages:Message[]
}
