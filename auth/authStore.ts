import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';

class AuthStore {
    @persist token?:string

    constructor() {
      makeAutoObservable(this);
    }

    setToken(token:string) {
      this.token = token;
    }
}

export const authStore = new AuthStore();
