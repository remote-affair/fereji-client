import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceDetailsComponent } from '../source-details/components/source-details/source-details.component';

import { SourcesTableComponent } from './components/sources-table/sources-table.component';

const routes: Routes = [
  { path: '', component: SourcesTableComponent },
  {
    path: ':uuid',
    component: SourceDetailsComponent,
    loadChildren: () =>
      import('../source-details/source-details.module').then(
        m => m.SourceDetailsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourcesRoutingModule {}
