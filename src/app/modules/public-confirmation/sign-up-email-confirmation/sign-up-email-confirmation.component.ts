import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'frj-sign-up-email-confirmation',
  templateUrl: './sign-up-email-confirmation.component.html',
  styleUrls: ['./sign-up-email-confirmation.component.scss'],
})
export class SignUpEmailConfirmationComponent implements OnInit {
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    //get uuid
    this.getUuid();
  }
  getUuid() {
    const uuid = this.ar.snapshot.queryParamMap.get('uuid');
    const token = this.ar.snapshot.queryParamMap.get('token');
  }

  emailConfirmation(uuid: string, token: string) {}
}
