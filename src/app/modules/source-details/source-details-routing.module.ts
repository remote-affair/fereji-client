import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceDataOperationsComponent } from './components/source-data-operations/source-data-operations.component';
import { SourceDataPreviewComponent } from './components/source-data-preview/source-data-preview.component';

import { SourceDetailsComponent } from './components/source-details/source-details.component';

const routes: Routes = [
  {
    path: '',
    component: SourceDetailsComponent,
    children: [
      { path: 'data-preview', component: SourceDataPreviewComponent },
      {
        path: 'data-operations',
        component: SourceDataOperationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourceDetailsRoutingModule {}
