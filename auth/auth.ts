import localforage from "localforage";
import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { User } from "../types/User";

export class Auth {
  user?: User;
  token?: string;
  refreshToken?: string;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      storage: localforage,
      name: "auth",
      properties: ["user", "token", "refreshToken"],
    });
  }
}

export const auth = new Auth();
