import { City } from './City';

export interface Fuser {
    id: string;
    name: string;
    cityId: string;
    city: City;
    joinStatusText:string;
    bioText?:string;
    livesIn?: string;
    from?: string;
    createdAt: Date;
    updatedAt: Date;
  }
