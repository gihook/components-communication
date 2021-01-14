import { Component } from '@angular/core';
import { ComputerItem } from '../models/models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  selectedComputerItem: ComputerItem;
  onSelectedComputerItem(computerItem: ComputerItem) {
    this.selectedComputerItem = computerItem;
  }
}
