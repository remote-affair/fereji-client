import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ConfirmationModel } from '@fereji/models/shared/confirmation-model';
import { AuthApiService } from '@fereji/services/apis/auth/auth-api.service';
import { TokenConfirmationModel } from '@fereji/models/shared/token-confirmation-model';
import { TokenStorageService } from '@fereji/services/token-storage/token-storage.service';

@Component({
  selector: 'frj-password-recovery-confirmation',
  templateUrl: './password-recovery-confirmation.component.html',
  styleUrls: ['./password-recovery-confirmation.component.scss'],
})
export class PasswordRecoveryConfirmationComponent implements OnInit {
  showLoader = false;
  showError = false;
  errorMessage = '';

  constructor(
    private ar: ActivatedRoute,
    private aas: AuthApiService,
    private router: Router,
    private toastr: ToastrService,
    private tss: TokenStorageService,
  ) {}

  ngOnInit(): void {
    //get uuid
    this.getToken();
  }

  getToken() {
    const token = this.ar.snapshot.queryParamMap.get('token') + '';
    this.tss.savePasswordRecoveryToken(token);
    this.emailConfirmation(token);
  }

  emailConfirmation(t: string) {
    this.showError = false;
    this.showLoader = true;
    const payload: TokenConfirmationModel = { token: t };
    const sub = this.aas.passwordRecoveryConfirmation(payload).subscribe({
      next: (res: any) => {
        this.router.navigate(['/users/reset-password']);
        this.showLoader = false;
        this.toastr.info(
          'Password token successfully confirmed',
          'Password recovery confirmation',
        );
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
