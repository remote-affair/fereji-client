import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordModel } from '@fereji/models/users/reset-password-model';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'frj-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  showSpinner = false;
  errorMessage = '';
  showError = false;

  title = 'Reset password';
  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aas: AuthApiService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });
  }

  resetPassword() {
    this.showSpinner = true;
    this.showError = false;

    if (this.formValidation()) {
      this.showError = true;
      this.showSpinner = false;
      return;
    }

    const payload: ResetPasswordModel = {
      pasword: this.authForm.value.password,
      token: '',
    };

    const sub = this.aas.resetPassword(payload).subscribe({
      next: (res: any) => {
        this.router.navigate(['/users/login']);
        this.showSpinner = false;
        this.toastr.info(
          'Password reset was successful',
          'Password Reset Sucess',
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

  formValidation() {
    if (this.authForm.invalid) {
      this.errorMessage = 'All field are required';
      return true;
    }

    if (this.authForm.value.password !== this.authForm.value.confirm_password) {
      this.errorMessage = 'Password dont match';
      return true;
    }
    return false;
  }
}
