import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';

import { SourceDetailsRoutingModule } from './source-details-routing.module';
import { SourceDetailsComponent } from './components/source-details/source-details.component';
import { SourceDataPreviewComponent } from './components/source-data-preview/source-data-preview.component';
import { SourceDataOperationsComponent } from './components/source-data-operations/source-data-operations.component';
import { SharedModule } from '../shared/shared.module';
import { ContentLoaderModule } from '../shared/content-loader/content-loader.module';

@NgModule({
  declarations: [
    SourceDetailsComponent,
    SourceDataPreviewComponent,
    SourceDataOperationsComponent,
  ],
  imports: [
    CommonModule,
    SourceDetailsRoutingModule,
    ClrDatagridModule,
    SharedModule,
    ContentLoaderModule,
  ],
})
export class SourceDetailsModule {}
