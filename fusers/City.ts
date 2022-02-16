import { State } from './State';

export interface City{
  id:string;
  name:string;
  stateId: string;
  state: State;
}
