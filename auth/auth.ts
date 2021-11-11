import { makeAutoObservable } from "mobx";
import { User } from "../types/User";
import { create, persist } from "mobx-persist";

export class Auth {
  @persist user?: User;
  @persist token?: string;
  @persist refreshToken?: string;

  constructor() {
    makeAutoObservable(this);
  }
}

export const auth = new Auth();
