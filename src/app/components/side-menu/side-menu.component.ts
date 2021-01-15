import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComputerItem, MenuItem } from '../../models/models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Output() itemSelected = new EventEmitter<ComputerItem>();

  selectedItemId: number;
  computerItems: ComputerItem[] = [];
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    const computerItems = [
      { id: 1, displayValue: 'Monitor' },
      { id: 2, displayValue: 'Keyboard' },
      { id: 3, displayValue: 'Laptop' },
      { id: 4, displayValue: 'Mouse' },
    ];

    this.bindMenuItems(computerItems);
  }

  private bindMenuItems(computerItems: ComputerItem[]) {
    this.menuItems = computerItems.map((computerItem) => {
      const isSelected = this.isSelectedItem(computerItem.id);
      const menuItem = { ...computerItem, isSelected };

      return menuItem;
    });
  }

  isSelectedItem(itemId: number) {
    console.log({ isSelectedItem: true });
    return this.selectedItemId === itemId;
  }

  selectItem(item: MenuItem) {
    this.selectedItemId = item.id;
    this.bindMenuItems(this.menuItems);
    this.itemSelected.emit(item);
  }
}
