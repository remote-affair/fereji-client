import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@fereji/guards/auth/auth.guard';

import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'users',
    component: GuestLayoutComponent,
    loadChildren: () =>
      import('./../user-auth/user-auth.module').then(
        module => module.UserAuthModule,
      ),
  },
  {
    path: 'dashboard',
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
