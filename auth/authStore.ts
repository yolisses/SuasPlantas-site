import { autorun, makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { api } from '../api/api';
import { User } from '../user/User';

class AuthStore {
    @persist token?:string

    @persist('object') user?:User

    constructor() {
      makeAutoObservable(this);
      autorun(() => {
        api.defaults.headers.common.Authorization = this.token || '';
      });
    }

    setToken(token:string) {
      this.token = token;
    }

    setUser(user:User) {
      this.user = user;
    }
}

export const authStore = new AuthStore();
