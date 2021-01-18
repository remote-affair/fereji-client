import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourcesDashboardComponent } from './sources-dashboard.component';
import {
  ClrDropdownModule,
  ClrIconModule,
  ClrPopoverModule,
  ClrSpinnerModule,
} from '@clr/angular';
import { RouterModule } from '@angular/router';
import { ContentLoaderModule } from '@fereji/modules/shared/content-loader/content-loader.module';

@NgModule({
  declarations: [SourcesDashboardComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrDropdownModule,
    ClrPopoverModule,
    RouterModule,
    ClrSpinnerModule,
    ContentLoaderModule,
  ],
  exports: [SourcesDashboardComponent],
})
export class SourcesDashboardModule {}
