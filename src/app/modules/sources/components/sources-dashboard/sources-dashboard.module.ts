import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourcesDashboardComponent } from './sources-dashboard.component';
import {
  ClrDropdownModule,
  ClrIconModule,
  ClrPopoverModule,
} from '@clr/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SourcesDashboardComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrDropdownModule,
    ClrPopoverModule,
    RouterModule,
  ],
  exports: [SourcesDashboardComponent],
})
export class SourcesDashboardModule {}
