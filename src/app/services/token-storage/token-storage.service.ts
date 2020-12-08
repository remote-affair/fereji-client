import { Injectable } from '@angular/core';
import { Token } from '@fereji/models/token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'token';

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
   * @return the retrieved token
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
   * Clears localStorage
   */
  signOut() {
    localStorage.clear();
  }
}
