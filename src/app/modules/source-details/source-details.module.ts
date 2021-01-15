import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceDetailsRoutingModule } from './source-details-routing.module';
import { SourceDetailsComponent } from './components/source-details/source-details.component';
import { SourceDataPreviewComponent } from './components/source-data-preview/source-data-preview.component';
import { SourceDataOperationsComponent } from './components/source-data-operations/source-data-operations.component';

@NgModule({
  declarations: [
    SourceDetailsComponent,
    SourceDataPreviewComponent,
    SourceDataOperationsComponent,
  ],
  imports: [CommonModule, SourceDetailsRoutingModule],
})
export class SourceDetailsModule {}
