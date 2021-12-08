import { Location } from "./Location";
import { Plant } from "./Plant";

export interface User {
  id: number;
  name: string;
  email: string;
  picture: string;
  description: string | null;
  instagramUsername: string | null;
  whatsappNumber: string | null;
  state: string;
  city: string;
  location: Location;
  plantSet: Plant[];
}
