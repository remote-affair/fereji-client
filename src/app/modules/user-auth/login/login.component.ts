import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClrLoadingState } from '@clr/angular';

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
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    private fb: FormBuilder,
    private authService: AuthApiService,
    private router: Router,
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

    if (this.authForm.valid) {
      this.submitBtnState = ClrLoadingState.LOADING;

      const sub = this.authService.signin(this.authForm.value).subscribe({
        next: res => {
          const { user, token } = res;
          this.tokenService.saveToken(token);
          this.tokenService.saveUser(user);
          this.submitBtnState = ClrLoadingState.SUCCESS;

          this.router.navigate(['/dashboard']);
        },

        error: () => {
          this.showError = true;
          this.submitBtnState = ClrLoadingState.ERROR;
        },

        complete: () => {
          if (sub) {
            sub.unsubscribe();
          }
        },
      });
    }
  }
}
