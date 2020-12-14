import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';

import { DashboardLayoutComponent } from './modules/layout/components/dashboard-layout/dashboard-layout.component';
import { GuestLayoutComponent } from './modules/layout/components/guest-layout/guest-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'users',
    component: GuestLayoutComponent,
    loadChildren: () =>
      import('./modules/user-auth/user-auth.module').then(
        module => module.UserAuthModule,
      ),
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        module => module.DashboardModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
