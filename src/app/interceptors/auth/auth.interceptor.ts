import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';

import { Token } from '@fereji/models/token';
import { TokenStorageService } from '@fereji/services/token-storage/token-storage.service';
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly AUTH_HEADER = 'Authorization';
  private token: Token;
  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null,
  );

  constructor(private tokenService: TokenStorageService) {
    this.token = this.tokenService.getToken();
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    request = this.addContentType(request);
    request = this.addAuthenticationToken(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          // 401 errors are most likely going to be because we have
          // an expired token that we need to refresh.
          if (this.isRefreshingToken) {
            // If isRefreshingToken is true, we will wait until
            // refreshTokenSubject has a non-null value which means
            // the new token is ready and we can retry the request again
            return this.refreshTokenSubject.pipe(
              filter(Boolean), // filter(request => request !== null)
              take(1),
              switchMap(() =>
                next.handle(this.addAuthenticationToken(request)),
              ),
            );
          } else {
            this.isRefreshingToken = true;

            // Set the refreshTokenSubject to null so that subsequent API
            // calls will wait until the new token has been retrieved
            this.refreshTokenSubject.next(null);

            return this.refreshToken().pipe(
              switchMap((token: Token) => {
                this.refreshTokenSubject.next(token);
                return next.handle(this.addAuthenticationToken(request));
              }),

              // When the call to refreshToken completes we reset the
              // isRefreshingToken to false for the next time the token
              // needs to be refreshed
              finalize(() => {
                this.isRefreshingToken = false;
              }),
            );
          }
        } else {
          return throwError(error);
        }
      }),
    );
  }

  /**
   * Adds authorization header if token is set and and request is internal
   *
   * @param request the http request to be manipulated
   * @returns the manipulated request object
   */
  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet, then we should not set the header
    if (!this.token) {
      return request;
    }

    // if we are calling an external api, then do not set the header
    if (!request.url.match(new RegExp(environment.baseApiUrl, 'gi'))) {
      return request;
    }

    return request.clone({
      headers: request.headers.set(
        this.AUTH_HEADER,
        `Bearer ${this.token.jwt}`,
      ),
    });
  }

  /**
   * Sets Content-Type header to application/json if none is set already
   *
   * @param request the http request object to be manipulated
   * @returns the manipulated request
   */
  private addContentType(request: HttpRequest<any>): HttpRequest<any> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    return request;
  }

  /**
   * Fetches a new token and replaces it localStorage
   *
   * @todo implement this logic correctly to talk to the backend
   */
  private refreshToken(): Observable<Token> {
    const fakeToken = {
      expires_in: 4500,
      jwt: 'some jwt',
      issued_at: Date().toString(),
      refresh_token: 'some refresh token',
    };

    this.tokenService.saveToken(fakeToken);

    return of(fakeToken);
  }
}
