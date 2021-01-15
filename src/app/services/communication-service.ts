import { Injectable } from '@angular/core';
import { ComputerItem } from '../models/models';
import { SimpleStore } from '../store/simple-store';

export interface State {
  selectItem: ComputerItem;
  allComputerItems: ComputerItem[];
}

const defaultValue: State = {
  selectItem: {} as ComputerItem,
  allComputerItems: [],
};

@Injectable({ providedIn: 'root' })
export class CommunicationService {
  private store: SimpleStore<State>;

  constructor() {
    this.store = new SimpleStore(defaultValue);
  }

  getState$() {
    return this.store.getState$();
  }

  setAllComputerItems(items: ComputerItem[]) {
    this.store.patchState({ allComputerItems: items });
  }

  setSelectedItem(item: ComputerItem) {
    this.store.patchState({ selectItem: item });
  }
}
