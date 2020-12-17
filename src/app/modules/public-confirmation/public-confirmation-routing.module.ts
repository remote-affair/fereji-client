import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpEmailConfirmationComponent } from './sign-up-email-confirmation/sign-up-email-confirmation.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpEmailConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicConfirmationRoutingModule {}
