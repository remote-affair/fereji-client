import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthApiService } from '@fereji/services/apis/auth-api.service';

@Component({
  selector: 'frj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showSpinner = false;
  errorMessage = '';
  showError = false;

  title = 'Sign In';
  authForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private aas: AuthApiService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.showSpinner = true;
    this.showError = false;

    if (this.authForm.invalid) {
      this.showError = true;
      this.showSpinner = false;
      this.errorMessage = 'All field are required';
      return;
    }

    const sub = this.aas.signin(this.authForm.value).subscribe({
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
}
