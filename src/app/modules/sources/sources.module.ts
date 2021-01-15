import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClrDatagridModule,
  ClrDropdownModule,
  ClrIconModule,
} from '@clr/angular';

import { SourcesRoutingModule } from './sources-routing.module';
import { SourcesTableComponent } from './components/sources-table/sources-table.component';
import { UploaderModule } from './components/uploader/uploader.module';

@NgModule({
  declarations: [SourcesTableComponent],
  imports: [
    CommonModule,
    SourcesRoutingModule,
    ClrIconModule,
    UploaderModule,
    ClrDatagridModule,
    ClrDropdownModule,
    ClrDatagridModule,
  ],
})
export class SourcesModule {}
