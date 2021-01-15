import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  filter,
  finalize,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';

import { Token } from '@fereji/models/token';
import { TokenStorageService } from '@fereji/services/token-storage/token-storage.service';
import { environment } from '@env/environment';
import { HttpService } from '@fereji/services/http/http.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly AUTH_HEADER = 'Authorization';
  private token: Token;
  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null,
  );

  constructor(
    private tokenService: TokenStorageService,
    private httpService: HttpService,
    private router: Router,
  ) {
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
              filter(result => result !== null),
              take(1),
              switchMap(result => {
                if (result) {
                  return next.handle(this.addAuthenticationToken(request));
                }

                this.router.navigate(['/users/login']);
                return throwError(error);
              }),
            );
          } else {
            this.isRefreshingToken = true;

            // Set the refreshTokenSubject to null so that subsequent API
            // calls will wait until the new token has been retrieved
            this.refreshTokenSubject.next(null);

            return this.refreshToken().pipe(
              switchMap((success: boolean) => {
                this.refreshTokenSubject.next(success);
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
        `${this.token.token_type} ${this.token.access_token}`,
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
    if (
      !request.headers.has('Content-Type') &&
      !(request.body instanceof FormData)
    ) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    return request;
  }

  /**
   * Fetches a new token and replaces it localStorage
   *
   * @returns an observable of the fetched token or http error
   */
  private refreshToken(): Observable<boolean> {
    this.tokenService.removeToken();

    return this.httpService.makeRequest('GET', '/user/auth').pipe(
      tap(token => {
        this.tokenService.saveToken(token);
      }),
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
