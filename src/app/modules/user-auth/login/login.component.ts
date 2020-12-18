import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { ToastrService } from 'ngx-toastr';

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
        this.router.navigate(['/dashboard']);
        this.showSpinner = false;
        this.toastr.info('User successfully signed in', 'Login sucess');
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
