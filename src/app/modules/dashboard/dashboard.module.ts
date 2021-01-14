import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClrIconModule } from '@clr/angular';
import { UploaderModule } from '../sources/components/uploader/uploader.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClrIconModule,
    UploaderModule,
  ],
})
export class DashboardModule {}
