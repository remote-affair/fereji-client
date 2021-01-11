import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Token } from '@fereji/models/token';
import { User } from '@fereji/models/user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';
  private readonly PASSWORD_RECOVERY_TOKEN_KEY = 'password_recovert_token';

  constructor(private router: Router) {}

  /**
   * Saves the given token to localStorage
   *
   * @param token the token to be saved
   */
  saveToken(token: Token) {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  /**
   * Retrieves token from the localStorage
   *
   * @returns the retrieved token
   */
  getToken(): Token {
    let token: any = localStorage.getItem(this.TOKEN_KEY);
    try {
      token = JSON.parse(token) || null;
    } catch (error) {
      token = null;
    }

    return token;
  }

  /**
   * Saves password recovery token to localStorage
   *
   * @param token the token to be saved
   */
  savePasswordRecoveryToken(token: string) {
    localStorage.removeItem(this.PASSWORD_RECOVERY_TOKEN_KEY);
    localStorage.setItem(
      this.PASSWORD_RECOVERY_TOKEN_KEY,
      JSON.stringify(token),
    );
  }

  /**
   * Retrieves password recovery token from the localStorage
   *
   * @returns the retrieved token
   */
  getPasswordRecoveryToken(): string {
    let token: any = localStorage.getItem(this.PASSWORD_RECOVERY_TOKEN_KEY);
    try {
      token = JSON.parse(token) || null;
    } catch (error) {
      token = null;
    }

    return token;
  }

  /**
   * Removes the token from localStorage
   */
  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  /**
   * Persists the given user object to localStorage
   *
   * @param user the user object to be saved
   */
  saveUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  getUser(): User {
    let user: any = localStorage.getItem(this.USER_KEY);

    try {
      user = JSON.parse(user) || null;
    } catch (error) {
      user = null;
    }
    return user;
  }

  /**
   * Clears localStorage
   */
  signOut() {
    localStorage.clear();
    this.router.navigate(['/users/login']);
  }
}
