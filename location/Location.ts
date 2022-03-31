import { LatLng } from './LatLng';

export interface Location{
  city:string
  state:string
  radius:number
  position:LatLng
}
