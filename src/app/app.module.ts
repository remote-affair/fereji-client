import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/user-auth/login/login.module';
import { SignUpModule } from './modules/user-auth/sign-up/sign-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    SignUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
