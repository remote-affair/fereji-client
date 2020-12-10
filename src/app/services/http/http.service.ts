import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { UrlOptions } from '@fereji/models/url-options';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  makeRequest(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    urlResource: UrlOptions,
    options:
      | {
          body?: any;
          headers?:
            | HttpHeaders
            | {
                [header: string]: string | string[];
              }
            | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | { [param: string]: any } | undefined;
          responseType?: 'json' | undefined;
          reportProgress?: boolean | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined,
  ): Observable<any> {
    const requestUrl = this.getRequestUrl(urlResource);

    if (!requestUrl) {
      throw new HttpErrorResponse({
        error: 'Base url must be set for all external requests',
      });
    }

    return this.http.request(method, requestUrl, options);
  }

  getRequestUrl(urlOptions: UrlOptions): string | null {
    if (typeof urlOptions === 'object') {
      if (urlOptions.isExternal) {
        if (!urlOptions.base) {
          return null;
        }

        return `${urlOptions.base}/${urlOptions.endpoint}`;
      }

      return `${environment.baseApiUrl}/${urlOptions.endpoint}`;
    }

    return `${environment.baseApiUrl}/${urlOptions}`;
  }
}
