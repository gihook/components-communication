import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ComputerItem } from '../models/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  computerItem: ComputerItem;
  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.registerAction((ci) => (this.computerItem = ci));
  }
}
