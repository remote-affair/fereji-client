import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicConfirmationRoutingModule } from './public-confirmation-routing.module';
import { SignUpEmailConfirmationModule } from './sign-up-email-confirmation/sign-up-email-confirmation.module';
import { PasswordRecoveryConfirmationModule } from './password-recovery-confirmation/password-recovery-confirmation.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicConfirmationRoutingModule,
    SignUpEmailConfirmationModule,
    PasswordRecoveryConfirmationModule,
  ],
})
export class PublicConfirmationModule {}
