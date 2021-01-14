import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ComputerItem, MenuItem } from '../models/models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Output() selectedComputerItem = new EventEmitter<ComputerItem>();

  selectedItemId: number;
  computerItems: ComputerItem[] = [];
  menuItems: MenuItem[] = [];

  constructor(private communicationService: CommunicationService) {}

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

  private emitItem(item: ComputerItem) {
    this.selectedComputerItem.emit(item);
  }

  selectItem(item: MenuItem) {
    this.selectedItemId = item.id;
    this.bindMenuItems(this.menuItems);
    this.emitItem(item);
    this.communicationService.emitItem(item);
  }
}
