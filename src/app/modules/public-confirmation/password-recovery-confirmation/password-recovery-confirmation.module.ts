import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoaderModule } from '@fereji/modules/shared/app-loader/app-loader.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';

import { PasswordRecoveryConfirmationComponent } from './password-recovery-confirmation.component';

@NgModule({
  declarations: [PasswordRecoveryConfirmationComponent],
  imports: [CommonModule, AppLoaderModule, FormErrorModule],
})
export class PasswordRecoveryConfirmationModule {}
