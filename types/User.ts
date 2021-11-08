import { Location } from "./Location";

export interface User {
    id:number;
    name: string;
    email:string;
    image:string
    description:string|null
    instagramUsername:string|null
    whatsappNumber:string|null
    state:string
    city:string
    location:Location
  }