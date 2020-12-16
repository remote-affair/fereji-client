import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GuestLayoutComponent,
    DashboardLayoutComponent,
    AsideComponent,
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
  ],
})
export class LayoutModule {}
