import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menuItems: { id: number; displayValue: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      { id: 1, displayValue: 'Monitor' },
      { id: 2, displayValue: 'Keyboard' },
      { id: 3, displayValue: 'Laptop' },
      { id: 4, displayValue: 'Mouse' },
    ];
  }
}
