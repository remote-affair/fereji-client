import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frj-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get year() {
    return new Date().getFullYear();
  }
}
