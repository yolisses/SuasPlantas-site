import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { User } from "../user/User";

export class Auth {
  user?: User;
  token?: string;
  refreshToken?: string;

  constructor() {
    makeAutoObservable(this);
    try {
      makePersistable(this, {
        name: "auth",
        storage: localStorage,
        properties: ["user", "token", "refreshToken"],
      });
    } catch (err) {}
  }
}

export const auth = new Auth();
