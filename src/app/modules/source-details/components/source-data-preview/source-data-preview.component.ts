import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileHelper } from '@fereji/helpers/file-helper/file-helper';

import { DataSource } from '@fereji/models/data-source';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';

@Component({
  selector: 'frj-source-data-preview',
  templateUrl: './source-data-preview.component.html',
  styleUrls: ['./source-data-preview.component.scss'],
})
export class SourceDataPreviewComponent implements OnInit {
  siloData: Array<any> = [];
  columns: Array<{ hidden: boolean; name: string }> = [];
  isFetching = false;
  silo!: DataSource;

  private siloUuid!: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly siloService: DataSiloService,
  ) {}

  ngOnInit(): void {
    this.siloUuid = this.route.snapshot.parent?.paramMap.get('uuid') as any;

    this.fetchSiloData();
    this.fetchSilo();
  }

  downloadFile(format: 'csv_data' | 'excel_data') {
    const sub = this.siloService
      .getSiloData(this.siloUuid, format, {
        responseType: 'blob',
        observe: 'response',
      })
      .subscribe({
        next: (resp: HttpResponse<Blob>) => {
          const fileName =
            this.silo.silo_label ||
            resp.headers?.get('content-disposition')?.split(';')[0] ||
            this.silo.silo_name;

          FileHelper.saveAs(resp.body, fileName);
        },
        error: () => {
          if (sub) {
            sub.unsubscribe();
          }
        },
        complete: () => {
          if (sub) {
            sub.unsubscribe();
          }
        },
      });
  }

  private fetchSiloData() {
    this.isFetching = true;

    const sub = this.siloService.getSiloData(this.siloUuid).subscribe({
      next: resp => {
        this.siloData = resp;

        if (resp.length) {
          this.columns = Object.keys(resp[0]).map((key, index) => {
            if (index < 5) {
              return { name: key, hidden: false };
            }
            return { name: key, hidden: true };
          });
        }
      },

      error: err => {
        this.isFetching = false;
      },

      complete: () => {
        if (sub) {
          sub.unsubscribe();
        }

        this.isFetching = false;
      },
    });
  }

  private fetchSilo() {
    const sub = this.siloService.getDataSilo(this.siloUuid).subscribe({
      next: silo => {
        this.silo = silo;
      },

      complete: () => {
        if (sub) {
          sub.unsubscribe();
        }
      },
    });
  }
}
