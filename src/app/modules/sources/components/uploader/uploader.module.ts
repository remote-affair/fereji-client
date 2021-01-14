import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrFormsModule, ClrInputModule, ClrModalModule } from '@clr/angular';

import { UploaderComponent } from './uploader.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploaderComponent],
  imports: [
    CommonModule,
    ClrModalModule,
    ClrFormsModule,
    ClrInputModule,
    ReactiveFormsModule,
  ],
  exports: [UploaderComponent],
})
export class UploaderModule {}
