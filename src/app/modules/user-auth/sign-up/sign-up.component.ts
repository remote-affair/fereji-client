import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateAccountModel } from '@fereji/models/users/create-account-model';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';

@Component({
  selector: 'frj-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  showSpinner = false;
  errorMessage = '';
  showError = false;

  title = 'Create User Account';
  authForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private aas: AuthApiService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });
  }

  signup() {
    this.showSpinner = true;
    this.showError = false;

    if (this.formValidation()) {
      this.showError = true;
      this.showSpinner = false;
      return;
    }

    const sub = this.aas.signup(this.preparePayload()).subscribe({
      next: (res: any) => {
        console.log(res);
        this.showSpinner = false;
      },
      error: (error: any) => {
        console.log(error);
        this.errorMessage = error.statusText;
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

  preparePayload() {
    const payload: CreateAccountModel = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
      username: this.authForm.value.username,
      first_name: this.authForm.value.first_name,
      last_name: this.authForm.value.last_name,
    };
    return payload;
  }
}
