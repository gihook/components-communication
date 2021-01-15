import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComputerItem } from '../models/models';

interface State {
  selectItem: ComputerItem;
  allComputerItems: ComputerItem[];
}

const defaultValue: State = {
  selectItem: {} as ComputerItem,
  allComputerItems: [],
};

@Injectable({ providedIn: 'root' })
export class CommunicationService {
  private state$ = new BehaviorSubject<State>(defaultValue);

  getState$() {
    return this.state$.asObservable();
  }

  setAllComputerItems(items: ComputerItem[]) {
    this.patchState({ allComputerItems: items });
  }

  setSelectedItem(item: ComputerItem) {
    this.patchState({ selectItem: item });
  }

  patchState(partialState: Partial<State>) {
    const existingState = this.state$.value;
    const newState = { ...existingState, ...partialState };
    this.state$.next(newState);
  }
}
