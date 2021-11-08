import { makeAutoObservable } from "mobx";

interface User {
  name: string;
}

class Auth {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export const auth = new Auth();
