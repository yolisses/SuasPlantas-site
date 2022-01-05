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

error(text:string) {
  this.snack = { severity: 'error', text };
}

success(text:string) {
  this.snack = { severity: 'success', text };
}

close() {
  this.snack = undefined;
}
}

export const snackStore = new SnackStore();
