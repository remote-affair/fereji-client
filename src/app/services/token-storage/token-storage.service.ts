import { Injectable } from '@angular/core';

import { Token } from '@fereji/models/token';
import { User } from '@fereji/models/user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';

  constructor() {}

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

  /**
   * Clears localStorage
   */
  signOut() {
    localStorage.clear();
  }
}
