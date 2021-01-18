import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrLoadingModule, ClrSpinnerModule } from '@clr/angular';

import { ContentLoaderComponent } from './content-loader.component';

@NgModule({
  declarations: [ContentLoaderComponent],
  imports: [CommonModule, ClrSpinnerModule, ClrLoadingModule],
  exports: [ContentLoaderComponent],
})
export class ContentLoaderModule {}
