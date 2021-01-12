import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ClrLoadingState } from '@clr/angular';

import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'frj-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  showSpinner = ClrLoadingState.DEFAULT;
  errorMessage = '';
  showError = false;
  showSuccess = false;

  title = 'Forgot Password';
  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthApiService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  forgotPassword() {
    this.showSpinner = ClrLoadingState.LOADING;
    this.showError = false;
    this.showSuccess = false;

    if (this.authForm.valid) {
      const sub = this.authService
        .forgotPassword(this.authForm.value)
        .pipe(delay(5000))
        .subscribe({
          next: (res: any) => {
            this.showSuccess = true;
            this.showSpinner = ClrLoadingState.SUCCESS;
          },
          error: (err: any) => {
            this.errorMessage = err.error.detail;
            this.showError = true;
            this.showSpinner = ClrLoadingState.ERROR;
          },
          complete: () => {
            sub.unsubscribe();
          },
        });
    }
  }
}
