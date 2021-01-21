import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceDataOperationsComponent } from './components/source-data-operations/source-data-operations.component';
import { SourceDataPreviewComponent } from './components/source-data-preview/source-data-preview.component';
import { SourceDetailsEditComponent } from './components/source-details-edit/source-details-edit.component';

const routes: Routes = [
  { path: 'edit', component: SourceDetailsEditComponent },
  { path: 'data-preview', component: SourceDataPreviewComponent },
  {
    path: 'data-operations',
    component: SourceDataOperationsComponent,
  },
  { path: '', redirectTo: 'data-preview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourceDetailsRoutingModule {}
