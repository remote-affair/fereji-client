import { Component, OnInit } from '@angular/core';
import { DataSource } from '@fereji/models/data-source';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'frj-sources-dashboard',
  templateUrl: './sources-dashboard.component.html',
  styleUrls: ['./sources-dashboard.component.scss'],
})
export class SourcesDashboardComponent implements OnInit {
  silos$!: Observable<Array<DataSource>>;

  constructor(private readonly siloService: DataSiloService) {}

  ngOnInit(): void {
    this.silos$ = this.siloService
      .getDataSilos()
      .pipe(map((silos: DataSource[]) => silos.slice(-10)));
  }
}
