import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { User } from '../user/User';

class AuthStore {
    @persist('object') user?:User

    constructor() {
      makeAutoObservable(this);
    }

    setUser(user:User) {
      this.user = user;
    }
}

export const authStore = new AuthStore();
