import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import {
  ClrAlertModule,
  ClrInputModule,
  ClrLoadingModule,
  ClrPasswordModule,
} from '@clr/angular';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TopOffsetTitleModule,
    FormErrorModule,
    ButtonSpinnerModule,
    ClrInputModule,
    ClrLoadingModule,
    ClrAlertModule,
  ],
})
export class ForgotPasswordModule {}
