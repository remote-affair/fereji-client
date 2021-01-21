import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClrAlertModule,
  ClrDatagridModule,
  ClrDropdownModule,
  ClrIconModule,
  ClrLoadingButtonModule,
  ClrLoadingModule,
  ClrModalModule,
} from '@clr/angular';

import { SourcesRoutingModule } from './sources-routing.module';
import { SourcesTableComponent } from './components/sources-table/sources-table.component';
import { UploaderModule } from './components/uploader/uploader.module';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [SourcesTableComponent, ConfirmDeleteComponent],
  imports: [
    CommonModule,
    SourcesRoutingModule,
    ClrIconModule,
    UploaderModule,
    ClrDatagridModule,
    ClrDropdownModule,
    ClrDatagridModule,
    ClrModalModule,
    ClrLoadingButtonModule,
    ClrLoadingModule,
    ClrAlertModule,
  ],
})
export class SourcesModule {}
