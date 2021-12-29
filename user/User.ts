import { Plant } from '../types/Plant';

export type UserId = number;

export interface User {
    id: UserId;
    name: string;
    email: string;
    image: string;
    description?: string;
    instagramUsername?: string;
    whatsappNumber?: number;
    state: string;
    city: string;
    plants: Plant[];
    createdAt: string;
    updatedAt: string;
}
