import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TopOffsetTitleModule,
    RouterModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
