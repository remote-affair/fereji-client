import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from '@fereji/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class DataSiloService {
  private readonly DATA_SILO_ENDPOINT = 'datasilo/';
  private readonly DATA_SOURCE_TYPES_ENDPOINT = 'datasource/';

  constructor(private readonly http: HttpService) {}

  getDataSourceTypes() {
    return this.http.makeRequest('GET', this.DATA_SOURCE_TYPES_ENDPOINT);
  }

  upload(payload: any) {
    return this.http.makeRequest('POST', this.DATA_SILO_ENDPOINT, {
      body: payload,
    });
  }
}
