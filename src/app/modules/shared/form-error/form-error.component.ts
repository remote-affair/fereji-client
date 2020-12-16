import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'frj-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnInit {
  @Input() error = '';

  constructor() {}

  ngOnInit(): void {}
}
