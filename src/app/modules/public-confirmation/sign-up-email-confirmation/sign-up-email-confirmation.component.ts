import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfirmationModel } from '@fereji/models/shared/confirmation-model';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'frj-sign-up-email-confirmation',
  templateUrl: './sign-up-email-confirmation.component.html',
  styleUrls: ['./sign-up-email-confirmation.component.scss'],
})
export class SignUpEmailConfirmationComponent implements OnInit {
  showLoader = false;
  showError = false;
  errorMessage = '';

  constructor(
    private ar: ActivatedRoute,
    private aas: AuthApiService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    //get uuid
    this.getUuid();
  }
  getUuid() {
    const uuid = this.ar.snapshot.queryParamMap.get('uuid') + '';
    const token = this.ar.snapshot.queryParamMap.get('token') + '';
    this.emailConfirmation(uuid, token);
  }

  emailConfirmation(u: string, t: string) {
    this.showError = false;
    this.showLoader = true;
    const payload: ConfirmationModel = { token: t, uuid: u };
    const sub = this.aas.signupConfirmation(payload).subscribe({
      next: (res: any) => {
        this.router.navigate(['/users/login']);
        this.showLoader = false;
        this.toastr.info('Email successfully confirmed', 'Email confirmation');
      },
      error: (error: any) => {
        this.errorMessage = error.error.message;
        this.showError = true;
        this.showLoader = false;
      },
      complete: () => {
        sub.unsubscribe();
      },
    });
  }
}
