import { Injectable } from '@angular/core';

import { User } from '@fereji/models/user';
import { LoginModel } from '@fereji/models/users/login-model';

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
  signup(payload: User) {
    return this.http.makeRequest('POST', 'user/', {
      body: payload,
    });
  }
}
