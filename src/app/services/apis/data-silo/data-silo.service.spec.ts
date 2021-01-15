import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@fereji/services/http/http.service';

import { DataSiloService } from './data-silo.service';

describe('UploaderService', () => {
  let service: DataSiloService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DataSiloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
