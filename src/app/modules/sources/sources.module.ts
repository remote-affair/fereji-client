import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcesDashboardComponent } from './components/sources-dashboard/sources-dashboard.component';
import { SourcesTableComponent } from './components/sources-table/sources-table.component';

@NgModule({
  declarations: [SourcesDashboardComponent, SourcesTableComponent],
  imports: [CommonModule],
})
export class SourcesModule {}
