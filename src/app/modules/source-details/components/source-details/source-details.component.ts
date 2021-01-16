import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@fereji/models/data-source';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'frj-source-details',
  templateUrl: './source-details.component.html',
  styleUrls: ['./source-details.component.scss'],
})
export class SourceDetailsComponent implements OnInit {
  silo$!: Observable<DataSource>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly siloService: DataSiloService,
  ) {}

  ngOnInit(): void {
    const uuid: any = this.route.snapshot.paramMap.get('uuid');
    this.silo$ = this.siloService.getDataSilo(uuid);
  }
}
