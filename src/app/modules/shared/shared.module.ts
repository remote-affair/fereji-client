import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibleColumnsPipe } from './pipes/visible-columns/visible-columns.pipe';

@NgModule({
  declarations: [VisibleColumnsPipe],
  imports: [CommonModule],
  exports: [VisibleColumnsPipe],
})
export class SharedModule {}
