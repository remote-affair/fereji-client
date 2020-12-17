import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppLoaderModule } from '@fereji/modules/shared/app-loader/app-loader.module';

import { SignUpEmailConfirmationComponent } from './sign-up-email-confirmation.component';

describe('SignUpEmailConfirmationComponent', () => {
  let component: SignUpEmailConfirmationComponent;
  let fixture: ComponentFixture<SignUpEmailConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpEmailConfirmationComponent],
      imports: [AppLoaderModule, RouterTestingModule],
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
