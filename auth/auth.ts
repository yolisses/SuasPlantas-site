import { makeAutoObservable } from "mobx";
import { User } from "../types/User";
import { makePersistable } from "mobx-persist-store";

export class Auth {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
    if (process.browser)
      makePersistable(this, {
        name: "authStore",
        properties: ["user"],
        storage: window.localStorage,
      });
  }
}

export const auth = new Auth();
