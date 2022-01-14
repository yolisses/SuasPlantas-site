import { makeAutoObservable } from 'mobx';

interface SearchQuery{
    text?:string
    sell?:boolean
    swap?:boolean
    donate?:boolean
}

class FilterStore {
    query?:SearchQuery

    constructor() {
      makeAutoObservable(this);
    }
}

export const filterStore = new FilterStore();
