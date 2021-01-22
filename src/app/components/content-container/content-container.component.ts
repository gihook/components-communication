import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  CommunicationService,
  State,
} from 'src/app/services/communication-service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  fullState$: Observable<State>;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.fullState$ = this.communicationService.getState$().pipe(
      tap((state) => {
        const items = state.allComputerItems;
        console.table(items);
      })
    );
  }
}
