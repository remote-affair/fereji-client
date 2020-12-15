import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserAuthRoutingModule, LoginModule, SignUpModule],
})
export class UserAuthModule {}
