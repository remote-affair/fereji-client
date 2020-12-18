import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';

import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TopOffsetTitleModule,
    FormErrorModule,
    ButtonSpinnerModule,
  ],
})
export class ResetPasswordModule {}
