import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';

import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TopOffsetTitleModule,
  ],
})
export class ResetPasswordModule {}
