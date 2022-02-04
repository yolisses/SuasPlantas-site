import { Quest } from '../quest/Quest';
import { Plant } from '../plant/Plant';

export type UserId = number;

export interface User {
    id: UserId|'preview';
    name: string;
    email: string;
    image: string;
    description?: string;
    instagramUsername?: string;
    whatsappNumber?: number;
    location:{
        type:'Point'
        coordinates:[number, number]
    }
    state: string;
    city: string;
    plants: Plant[];
    likedPlants: Plant[];
    createdAt: string;
    updatedAt: string;
    quests: Quest[]
    preview?:true
}
