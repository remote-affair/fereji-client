import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { CreateAccountModel } from '@fereji/models/users/create-account-model';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'frj-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  showSpinner = ClrLoadingState.DEFAULT;
  errorMessage = '';
  showError = false;
  showSuccess = false;

  title = 'Create User Account';
  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aas: AuthApiService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signup() {
    this.showError = false;
    this.showSuccess = false;

    if (this.authForm.valid) {
      this.showSpinner = ClrLoadingState.LOADING;

      const payload = {
        ...this.authForm.value,
        username: this.authForm.value.email,
      };

      const sub = this.aas.signup(payload).subscribe({
        next: (res: any) => {
          this.showSpinner = ClrLoadingState.SUCCESS;
          // this.router.navigate(['/users/login']);
          this.showSuccess = true;
        },
        error: (error: any) => {
          this.errorMessage = error.error.error;
          this.showSpinner = ClrLoadingState.ERROR;
          this.showError = true;
        },
        complete: () => {
          sub.unsubscribe();
        },
      });
    }
  }
}
