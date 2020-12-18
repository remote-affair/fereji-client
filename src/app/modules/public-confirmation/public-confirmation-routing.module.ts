import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordRecoveryConfirmationComponent } from './password-recovery-confirmation/password-recovery-confirmation.component';
import { SignUpEmailConfirmationComponent } from './sign-up-email-confirmation/sign-up-email-confirmation.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpEmailConfirmationComponent },
  {
    path: 'password-recovery',
    component: PasswordRecoveryConfirmationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicConfirmationRoutingModule {}
