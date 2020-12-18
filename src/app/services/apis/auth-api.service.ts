import { Injectable } from '@angular/core';

import { ConfirmationModel } from '@fereji/models/shared/confirmation-model';
import { TokenConfirmationModel } from '@fereji/models/shared/token-confirmation-model';
import { CreateAccountModel } from '@fereji/models/users/create-account-model';
import { LoginModel } from '@fereji/models/users/login-model';
import { PasswordResetRequest } from '@fereji/models/users/password-reset-request';

import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpService) {}

  /**
   * @description
   * User login : client login
   *
   * @param payload
   */
  signin(payload: LoginModel) {
    return this.http.makeRequest('POST', 'user/auth/login/', {
      body: payload,
    });
  }

  /**
   * @description
   * User account creation : client user
   *
   * @param payload
   */
  signup(payload: CreateAccountModel) {
    return this.http.makeRequest('POST', 'user/', {
      body: payload,
    });
  }

  /**
   * @description
   * Sign up confirmation
   *
   * @param payload
   */
  signupConfirmation(payload: ConfirmationModel) {
    return this.http.makeRequest(
      'GET',
      'user/auth/activate-account/' + payload.uuid + '/' + payload.token + '/',
    );
  }

  /**
   * @description
   * Forgot password request : client user
   *
   * @param payload
   */
  forgotPassword(payload: PasswordResetRequest) {
    return this.http.makeRequest('POST', 'user/password_reset/', {
      body: payload,
    });
  }

  /**
   * @description
   * Password recovery confirmation
   *
   * @param payload
   */
  passwordRecoveryConfirmation(payload: TokenConfirmationModel) {
    return this.http.makeRequest(
      'POST',
      'user/password_reset/validate_token/',
      { body: payload },
    );
  }
}
