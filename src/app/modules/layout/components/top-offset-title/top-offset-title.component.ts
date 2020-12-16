import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'frj-top-offset-title',
  templateUrl: './top-offset-title.component.html',
  styleUrls: ['./top-offset-title.component.scss'],
})
export class TopOffsetTitleComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
