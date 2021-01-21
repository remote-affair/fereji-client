import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule, ClrDropdownModule } from '@clr/angular';

import { SourceDetailsRoutingModule } from './source-details-routing.module';
import { SourceDetailsComponent } from './components/source-details/source-details.component';
import { SourceDataPreviewComponent } from './components/source-data-preview/source-data-preview.component';
import { SourceDataOperationsComponent } from './components/source-data-operations/source-data-operations.component';
import { SharedModule } from '../shared/shared.module';
import { ContentLoaderModule } from '../shared/content-loader/content-loader.module';
import { SourceDetailsEditComponent } from './components/source-details-edit/source-details-edit.component';

@NgModule({
  declarations: [
    SourceDetailsComponent,
    SourceDataPreviewComponent,
    SourceDataOperationsComponent,
    SourceDetailsEditComponent,
  ],
  imports: [
    CommonModule,
    SourceDetailsRoutingModule,
    ClrDatagridModule,
    SharedModule,
    ContentLoaderModule,
    ClrDropdownModule,
  ],
})
export class SourceDetailsModule {}
