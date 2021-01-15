import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommunicationService } from 'src/app/services/communication-service';
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
  // menuItems: MenuItem[] = [];
  menuItems$: Observable<MenuItem[]>;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.menuItems$ = this.communicationService.getState$().pipe(
      map((state) => {
        const { allComputerItems, selectItem } = state;

        return allComputerItems.map((item) => {
          const isSelected = item.id === selectItem.id;
          return { ...item, isSelected };
        });
      })
    );
  }

  // private bindMenuItems(computerItems: ComputerItem[]) {
  //   this.menuItems = computerItems.map((computerItem) => {
  //     const isSelected = this.isSelectedItem(computerItem.id);
  //     const menuItem = { ...computerItem, isSelected };

  //     return menuItem;
  //   });
  // }

  isSelectedItem(itemId: number) {
    console.log({ isSelectedItem: true });
    return this.selectedItemId === itemId;
  }

  selectItem(item: MenuItem) {
    this.selectedItemId = item.id;
    // this.bindMenuItems(this.menuItems);
    this.itemSelected.emit(item);
    this.communicationService.emitItem(item);
  }
}
