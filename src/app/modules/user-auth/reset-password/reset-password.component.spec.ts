import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';

import { ResetPasswordComponent } from './reset-password.component';
import {
  ClrInputModule,
  ClrLoadingButtonModule,
  ClrLoadingModule,
  ClrPasswordModule,
} from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        TopOffsetTitleModule,
        ButtonSpinnerModule,
        FormErrorModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        ClrLoadingButtonModule,
        ClrLoadingModule,
        BrowserAnimationsModule,
        ClrPasswordModule,
      ],
      providers: [AuthApiService, ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
