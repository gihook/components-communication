import { Component, Input, OnInit } from '@angular/core';
import { ComputerItem } from 'src/app/models/models';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  @Input() computerItem: ComputerItem;

  constructor() {}

  ngOnInit(): void {}
}
