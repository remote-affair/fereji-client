import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClrAlertModule,
  ClrFormsModule,
  ClrIconModule,
  ClrInputModule,
  ClrModalModule,
  ClrPopoverModule,
  ClrSelectModule,
} from '@clr/angular';

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
    ClrIconModule,
    ClrSelectModule,
    ClrAlertModule,
  ],
  exports: [UploaderComponent],
})
export class UploaderModule {}
