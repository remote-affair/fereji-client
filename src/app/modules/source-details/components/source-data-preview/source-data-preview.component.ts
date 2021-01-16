import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataSource } from '@fereji/models/data-source';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';

@Component({
  selector: 'frj-source-data-preview',
  templateUrl: './source-data-preview.component.html',
  styleUrls: ['./source-data-preview.component.scss'],
})
export class SourceDataPreviewComponent implements OnInit {
  siloData: Array<DataSource> = [];
  columns: Array<{ hidden: boolean; name: string }> = [];
  isFetching = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly siloService: DataSiloService,
  ) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.parent?.paramMap.get('uuid');

    this.fetchSiloData(uuid);
  }

  private fetchSiloData(uuid: any) {
    this.isFetching = true;

    const sub = this.siloService.getSiloData(uuid).subscribe({
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
}
