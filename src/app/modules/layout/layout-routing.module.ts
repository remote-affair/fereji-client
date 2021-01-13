import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@fereji/guards/auth/auth.guard';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { EmailConfirmationLayoutComponent } from './components/email-confirmation-layout/email-confirmation-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  {
    path: 'users',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./../user-auth/user-auth.module').then(
        module => module.UserAuthModule,
      ),
  },
  {
    path: 'public',
    component: EmailConfirmationLayoutComponent,
    loadChildren: () =>
      import('./../public-confirmation/public-confirmation.module').then(
        module => module.PublicConfirmationModule,
      ),
  },
  {
    path: 'data',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./../dashboard/dashboard.module').then(
        module => module.DashboardModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
