import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import {
  ClrIconModule,
  ClrPopoverModule,
  ClrVerticalNavModule,
} from '@clr/angular';
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
    RouterModule,
    RouterModule,
    ClrIconModule,
    ClrVerticalNavModule,
  ],
})
export class LayoutModule {}
