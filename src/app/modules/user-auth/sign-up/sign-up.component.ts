import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@fereji/models/user';

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
      organization: ['', []],
    });
  }

  signup() {
    this.showSpinner = true;
    this.showError = false;

    if (this.authForm.invalid) {
      this.showError = true;
      this.showSpinner = false;
      this.errorMessage = 'All field are required';
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

  preparePayload() {
    const payload: User = {
      email: this.authForm.value.email,
      organization: this.authForm.value.organization,
      username: this.authForm.value.username,
      first_name: this.authForm.value.first_name,
      last_name: this.authForm.value.last_name,
      groups: [],
      user_permissions: [],
    };
    return payload;
  }
}
