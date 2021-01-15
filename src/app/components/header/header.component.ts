import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComputerItem } from 'src/app/models/models';
import { CommunicationService } from 'src/app/services/communication-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  item$: Observable<ComputerItem>;
  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.item$ = this.communicationService
      .getState$()
      .pipe(map((state) => state.selectItem));
  }
}
