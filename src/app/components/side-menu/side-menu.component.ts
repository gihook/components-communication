import { Component, OnInit } from '@angular/core';
import { ComputerItem } from '../../models/models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  computerItems: ComputerItem[] = [];

  constructor() {}

  ngOnInit(): void {
    const computerItems = [
      { id: 1, displayValue: 'Monitor' },
      { id: 2, displayValue: 'Keyboard' },
      { id: 3, displayValue: 'Laptop' },
      { id: 4, displayValue: 'Mouse' },
    ];

    this.computerItems = computerItems;
  }
}
