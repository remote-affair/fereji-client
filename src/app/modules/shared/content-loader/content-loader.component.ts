import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'frj-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
})
export class ContentLoaderComponent implements OnInit {
  @Input()
  helperText = 'Fetching';

  @Input()
  isInverse = false;

  @Input()
  isSmall = false;

  @Input()
  isMedium = false;

  constructor() {}

  ngOnInit(): void {}
}
