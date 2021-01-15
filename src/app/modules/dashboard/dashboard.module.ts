import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrIconModule } from '@clr/angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UploaderModule } from '../sources/components/uploader/uploader.module';
import { SourcesDashboardModule } from '../sources/components/sources-dashboard/sources-dashboard.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClrIconModule,
    UploaderModule,
    SourcesDashboardModule,
  ],
})
export class DashboardModule {}
