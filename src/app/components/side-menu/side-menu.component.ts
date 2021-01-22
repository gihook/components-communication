import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommunicationService } from 'src/app/services/communication-service';
import { LoggerService } from 'src/app/services/logger.service';
import { ComputerItem, MenuItem } from '../../models/models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menuItems$: Observable<MenuItem[]>;

  constructor(
    private communicationService: CommunicationService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.menuItems$ = this.communicationService.getState$().pipe(
      map((state) => {
        const { allComputerItems, selectItem } = state;

        return allComputerItems.map((item) =>
          this.mapToMenuItem(item, selectItem)
        );
      })
    );
  }

  selectItem(item: MenuItem) {
    this.loggerService.log('Item selected');
    this.communicationService.setSelectedItem(item);
  }

  private mapToMenuItem(
    computerItem: ComputerItem,
    selectedItem: ComputerItem
  ) {
    const isSelected = computerItem.id === selectedItem.id;
    return { ...computerItem, isSelected };
  }
}
