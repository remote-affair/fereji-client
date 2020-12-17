import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppLoaderModule } from '@fereji/modules/shared/app-loader/app-loader.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';
import { AuthApiService } from '@fereji/services/apis/auth-api.service';

import { SignUpEmailConfirmationComponent } from './sign-up-email-confirmation.component';

describe('SignUpEmailConfirmationComponent', () => {
  let component: SignUpEmailConfirmationComponent;
  let fixture: ComponentFixture<SignUpEmailConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpEmailConfirmationComponent],
      imports: [
        AppLoaderModule,
        RouterTestingModule,
        FormErrorModule,
        ToastrModule.forRoot(),
        HttpClientModule,
      ],
      providers: [ToastrService, AuthApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpEmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
