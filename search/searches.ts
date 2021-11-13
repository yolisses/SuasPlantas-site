import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class Searches {
  searches: string[] = [];

  constructor() {
    makeAutoObservable(this);
    try {
      makePersistable(this, {
        name: "searches",
        storage: localStorage,
        properties: ["searches"],
      });
    } catch (err) {}
  }
}

export const searches = new Searches();
