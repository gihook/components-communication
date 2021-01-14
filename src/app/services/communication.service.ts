import { Injectable } from '@angular/core';
import { ComputerItem } from '../components/models/models';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  computerItem: ComputerItem;
  actions: ((ci: ComputerItem) => void)[] = [];

  registerAction(action: (ci: ComputerItem) => void) {
    this.actions = [action, ...this.actions];

    if (!this.computerItem) return;

    this.emitItem(this.computerItem);
  }

  emitItem(item: ComputerItem) {
    this.computerItem = item;
    this.actions.forEach((action) => action(item));
  }
}
