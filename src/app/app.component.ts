import { Component } from '@angular/core';
import { CommunicationService } from './services/communication-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isFooterVisible: boolean = true;
  title = 'components-communication';

  constructor(communicationService: CommunicationService) {
    const computerItems = [
      { id: 1, displayValue: 'Monitor' },
      { id: 2, displayValue: 'Keyboard' },
      { id: 3, displayValue: 'Laptop' },
      { id: 4, displayValue: 'Mouse' },
    ];

    communicationService.setAllComputerItems(computerItems);
  }
}
