import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { ResetPasswordModel } from '@fereji/models/users/reset-password-model';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { TokenStorageService } from '@fereji/services/token-storage/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'frj-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  showSpinner = ClrLoadingState.DEFAULT;
  errorMessage = '';
  showError = false;

  title = 'Reset password';
  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aas: AuthApiService,
    private router: Router,
    private toastr: ToastrService,
    private tss: TokenStorageService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }

  /**
   * @todo Make sure this is working
   * For example, this component should not be loaded if the url does not have a token
   */
  resetPassword() {
    this.showSpinner = ClrLoadingState.LOADING;
    this.showError = false;

    if (this.authForm.valid) {
      const payload: ResetPasswordModel = {
        pasword: this.authForm.value.password,
        token: this.tss.getPasswordRecoveryToken() || 'some-token',
      };

      const sub = this.aas.resetPassword(payload).subscribe({
        next: (res: any) => {
          this.router.navigate(['/users/login']);
          this.showSpinner = ClrLoadingState.SUCCESS;
          this.toastr.info(
            'Password reset was successful',
            'Password Reset Sucess',
          );
        },
        error: (error: any) => {
          this.errorMessage = error.statusText; // show the exact error
          this.showSpinner = ClrLoadingState.ERROR;
          this.showError = true;
        },
        complete: () => {
          sub.unsubscribe();
        },
      });
    }
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
