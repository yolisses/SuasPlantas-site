import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { User } from '../user/User';

class AuthStore {
    @persist token?:string

    @persist('object') user?:User

    constructor() {
      makeAutoObservable(this);
    }

    setToken(token:string) {
      this.token = token;
    }

    setUser(user:User) {
      this.user = user;
    }
}

export const authStore = new AuthStore();
