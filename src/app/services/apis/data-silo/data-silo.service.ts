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

  getDataSilos() {
    return this.http.makeRequest('GET', this.DATA_SILO_ENDPOINT);
  }

  getDataSilo(siloUuid: string) {
    return this.http.makeRequest(
      'GET',
      `${this.DATA_SILO_ENDPOINT}${siloUuid}/`,
    );
  }

  getSiloData(
    siloUuid: string,
    format: 'json_data' | 'csv_data' | 'excel_data' = 'json_data',
  ) {
    return this.http.makeRequest(
      'GET',
      `${this.DATA_SILO_ENDPOINT}${siloUuid}/${format}/`,
    );
  }

  upload(payload: any) {
    return this.http.makeRequest('POST', this.DATA_SILO_ENDPOINT, {
      body: payload,
    });
  }
}
