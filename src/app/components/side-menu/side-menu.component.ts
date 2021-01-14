import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: number;
  displayValue: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  selectedItemId: number;
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      { id: 1, displayValue: 'Monitor' },
      { id: 2, displayValue: 'Keyboard' },
      { id: 3, displayValue: 'Laptop' },
      { id: 4, displayValue: 'Mouse' },
    ];
  }
}
