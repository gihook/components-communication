import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommunicationService } from 'src/app/services/communication-service';
import { MenuItem } from '../../models/models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
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

  selectItem(item: MenuItem) {
    this.communicationService.setSelectedItem(item);
  }
}
