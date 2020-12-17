import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoaderModule } from '@fereji/modules/shared/app-loader/app-loader.module';

import { SignUpEmailConfirmationComponent } from './sign-up-email-confirmation.component';

@NgModule({
  declarations: [SignUpEmailConfirmationComponent],
  imports: [CommonModule, AppLoaderModule],
})
export class SignUpEmailConfirmationModule {}
