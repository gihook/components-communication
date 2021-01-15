import { Component, OnInit } from '@angular/core';
import { ComputerItem } from 'src/app/models/models';
import { CommunicationService } from 'src/app/services/communication-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  item: ComputerItem;
  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.subscribe((item) => {
      this.item = item;
    });
  }
}
