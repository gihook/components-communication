import { Component, OnInit } from '@angular/core';
import { ComputerItem } from 'src/app/models/models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  seletedItem: ComputerItem;
  constructor() {}

  ngOnInit(): void {}
}
