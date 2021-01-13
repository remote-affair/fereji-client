import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ClrAlertModule,
  ClrDropdownModule,
  ClrIconModule,
  ClrVerticalNavModule,
} from '@clr/angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';
import { AsideComponent } from './components/aside/aside.component';
import { EmailConfirmationLayoutComponent } from './components/email-confirmation-layout/email-confirmation-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GuestLayoutComponent,
    DashboardLayoutComponent,
    AsideComponent,
    EmailConfirmationLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule,
    ClrIconModule,
    ClrVerticalNavModule,
    ClrDropdownModule,
    ClrAlertModule,
  ],
})
export class LayoutModule {}
