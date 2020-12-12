import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { ClrIconModule } from '@clr/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GuestLayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [CommonModule, RouterModule, RouterModule, ClrIconModule],
})
export class LayoutModule {}
