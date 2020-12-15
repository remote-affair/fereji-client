import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frj-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  collapsed = false;

  constructor() {}

  ngOnInit(): void {}
}
