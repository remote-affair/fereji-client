import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicConfirmationRoutingModule } from './public-confirmation-routing.module';
import { SignUpEmailConfirmationModule } from './sign-up-email-confirmation/sign-up-email-confirmation.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicConfirmationRoutingModule,
    SignUpEmailConfirmationModule,
  ],
})
export class PublicConfirmationModule {}
