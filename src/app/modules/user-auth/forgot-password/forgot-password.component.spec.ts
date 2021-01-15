import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';
import { AuthApiService } from '@fereji/services/apis/auth/auth-api.service';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ClrInputModule, ClrLoadingModule } from '@clr/angular';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        TopOffsetTitleModule,
        ButtonSpinnerModule,
        FormErrorModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        ClrInputModule,
        ClrLoadingModule,
      ],
      providers: [ToastrService, AuthApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
