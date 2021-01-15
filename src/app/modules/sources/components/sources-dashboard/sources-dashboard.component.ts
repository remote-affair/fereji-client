import { Component, OnInit } from '@angular/core';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'frj-sources-dashboard',
  templateUrl: './sources-dashboard.component.html',
  styleUrls: ['./sources-dashboard.component.scss'],
})
export class SourcesDashboardComponent implements OnInit {
  silos$!: Observable<Array<any>>;

  constructor(private readonly siloService: DataSiloService) {}

  ngOnInit(): void {
    this.silos$ = this.siloService.getDataSilos();
  }
}
