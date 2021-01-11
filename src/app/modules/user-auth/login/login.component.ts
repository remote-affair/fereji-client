import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { TokenStorageService } from '@fereji/services/token-storage/token-storage.service';

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
  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aas: AuthApiService,
    private router: Router,
    private toastr: ToastrService,
    private tokenService: TokenStorageService,
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
        //save token to token storage service
        const { user, token } = res;
        this.tokenService.saveToken(token);
        this.tokenService.saveUser(user);

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
