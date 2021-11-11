import { makeAutoObservable } from "mobx";
import { User } from "../types/User";

export class Auth {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export const auth = new Auth();
