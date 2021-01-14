import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { ComputerItem } from '../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  computerItem: ComputerItem = {} as ComputerItem;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.registerAction((ci) =>
      this.onSelectedComputerItem(ci)
    );
  }

  onSelectedComputerItem(computerItem: ComputerItem) {
    this.computerItem = computerItem;
  }
}
