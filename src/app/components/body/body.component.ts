import { Component, OnInit } from '@angular/core';
import { ComputerItem } from 'src/app/models/models';
import { ColorLogger } from 'src/app/services/color-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [{ provide: LoggerService, useClass: ColorLogger }],
})
export class BodyComponent implements OnInit {
  seletedItem: ComputerItem;
  constructor() {}

  ngOnInit(): void {}
}
