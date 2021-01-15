import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerItem } from 'src/app/models/models';
import { CommunicationService } from 'src/app/services/communication-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  item$: Observable<ComputerItem>;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.item$ = this.communicationService.getState$().pipe(
      map((state) => {
        return state.selectItem;
      })
    );
  }
}
