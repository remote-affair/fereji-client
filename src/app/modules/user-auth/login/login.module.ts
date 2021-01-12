import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';

import { LoginComponent } from './login.component';
import {
  ClrCommonFormsModule,
  ClrFormsModule,
  ClrInputModule,
  ClrLoadingButtonModule,
  ClrLoadingModule,
} from '@clr/angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TopOffsetTitleModule,
    RouterModule,
    ButtonSpinnerModule,
    FormErrorModule,
    ClrFormsModule,
    ClrCommonFormsModule,
    ClrInputModule,
    ClrLoadingButtonModule,
    ClrLoadingModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
