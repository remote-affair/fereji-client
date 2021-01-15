import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { RouterTestingModule } from '@angular/router/testing';
import { AppLoaderModule } from '@fereji/modules/shared/app-loader/app-loader.module';
import { FormErrorModule } from '@fereji/modules/shared/form-error/form-error.module';
import { AuthApiService } from '@fereji/services/apis/auth/auth-api.service';

import { PasswordRecoveryConfirmationComponent } from './password-recovery-confirmation.component';

describe('PasswordRecoveryConfirmationComponent', () => {
  let component: PasswordRecoveryConfirmationComponent;
  let fixture: ComponentFixture<PasswordRecoveryConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordRecoveryConfirmationComponent],
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
    fixture = TestBed.createComponent(PasswordRecoveryConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
