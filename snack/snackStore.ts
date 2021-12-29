import { makeAutoObservable } from 'mobx';

interface Snack{
    severity?:'error'|'info'|'success'|'warning'
    text:string
  }

class SnackStore {
snack?:Snack

constructor() {
  makeAutoObservable(this);
}

setSnack(snack :Snack) {
  this.snack = snack;
}

close() {
  this.snack = undefined;
}
}

export const snackStore = new SnackStore();
