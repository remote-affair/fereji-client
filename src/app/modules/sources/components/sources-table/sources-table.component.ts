import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@fereji/models/data-source';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';

@Component({
  selector: 'frj-sources-table',
  templateUrl: './sources-table.component.html',
  styleUrls: ['./sources-table.component.scss'],
})
export class SourcesTableComponent implements OnInit {
  showUploader = false;
  silos!: Array<DataSource>;
  selected = [];
  fetching = false;
  currentSilo: DataSource | null = null;
  showConfirmDelete = false;

  constructor(
    private readonly siloService: DataSiloService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.getSilos();
  }

  getSilos() {
    this.fetching = true;

    const sub = this.siloService.getDataSilos().subscribe({
      next: resp => {
        this.silos = resp;
      },
      complete: () => {
        this.fetching = false;
        if (sub) {
          sub.unsubscribe();
        }
      },
    });
  }

  exportAll() {}
  exportSelected() {}
  edit(silo: DataSource) {
    this.router.navigate(['/data/sources', silo.silo_uuid, 'edit']);
  }

  delete() {}

  add(silo: DataSource | null = null) {}

  viewData(silo: DataSource) {
    this.router.navigate(['/data/sources', silo.silo_uuid]);
  }
}
