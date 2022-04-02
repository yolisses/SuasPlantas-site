import { Plant } from '../plant/Plant';

export type UserId = number;

export interface User {
    id: UserId;
    name: string;
    city: string;
    email: string;
    image: string;
    state: string;
    plants: Plant[];
    createdAt: string;
    updatedAt: string;
    likedPlants: Plant[];
    description?: string;
    whatsappNumber?: number;
    instagramUsername?: string;
    location?:{
        type:'Point'
        coordinates:[number, number]
    }
}
