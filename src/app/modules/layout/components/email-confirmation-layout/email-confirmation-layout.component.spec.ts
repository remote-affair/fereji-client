import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmationLayoutComponent } from './email-confirmation-layout.component';

describe('EmailConfirmationLayoutComponent', () => {
  let component: EmailConfirmationLayoutComponent;
  let fixture: ComponentFixture<EmailConfirmationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailConfirmationLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
