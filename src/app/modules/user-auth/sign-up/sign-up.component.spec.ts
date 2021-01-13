import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TopOffsetTitleModule } from '@fereji/modules/layout/components/top-offset-title/top-offset-title.module';
import { ButtonSpinnerModule } from '@fereji/modules/shared/button-spinner/button-spinner.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';

import { SignUpComponent } from './sign-up.component';
import {
  ClrInputModule,
  ClrLoadingButtonModule,
  ClrLoadingModule,
  ClrPasswordModule,
} from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        TopOffsetTitleModule,
        FormErrorModule,
        ButtonSpinnerModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        ClrInputModule,
        ClrPasswordModule,
        ClrLoadingModule,
        ClrLoadingButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [AuthApiService, ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
