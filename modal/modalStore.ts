import { makeAutoObservable } from 'mobx';
import { ReactElement, ReactNode } from 'react';

class ModalStore {
modal?:ReactNode

constructor() {
  makeAutoObservable(this);
}

setModal(modal :ReactElement) {
  this.modal = modal;
}

close() {
  this.modal = undefined;
}
}

export const modalStore = new ModalStore();
