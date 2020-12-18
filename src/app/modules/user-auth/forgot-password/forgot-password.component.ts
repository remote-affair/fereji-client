import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthApiService } from '@fereji/services/apis/auth-api.service';

@Component({
  selector: 'frj-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  showSpinner = false;
  errorMessage = '';
  showError = false;

  title = 'Forgot Password';
  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aas: AuthApiService,
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
    this.showSpinner = true;
    this.showError = false;

    if (this.authForm.invalid) {
      this.showError = true;
      this.showSpinner = false;
      this.errorMessage = 'Username is required';
      return;
    }

    const sub = this.aas.forgotPassword(this.authForm.value).subscribe({
      next: (res: any) => {
        this.router.navigate(['/users/login']);
        this.showSpinner = false;
        this.toastr.info(
          'Check your email for the account reset link',
          'Success',
        );
      },
      error: (error: any) => {
        this.errorMessage = error.error.error;
        this.showSpinner = false;
        this.showError = true;
      },
      complete: () => {
        sub.unsubscribe();
      },
    });
  }
}
