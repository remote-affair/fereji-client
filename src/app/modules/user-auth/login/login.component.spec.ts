import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';

import { LoginComponent } from './login.component';
import {
  ClrIconModule,
  ClrInputModule,
  ClrLoadingModule,
  ClrPasswordModule,
} from '@clr/angular';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        TopOffsetTitleModule,
        ButtonSpinnerModule,
        FormErrorModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        ClrInputModule,
        ClrLoadingModule,
        ClrIconModule,
        ClrPasswordModule,
      ],
      providers: [AuthApiService, ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
