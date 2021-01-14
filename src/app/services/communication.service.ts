import { Injectable } from '@angular/core';
import { ComputerItem } from '../components/models/models';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  actions: ((ci: ComputerItem) => void)[] = [];

  registerAction(action: (ci: ComputerItem) => void) {
    this.actions = [action, ...this.actions];
  }

  emitItem(item: ComputerItem) {
    this.actions.forEach((action) => action(item));
  }
}
