import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '../../layout.module';

import { EmailConfirmationLayoutComponent } from './email-confirmation-layout.component';

describe('EmailConfirmationLayoutComponent', () => {
  let component: EmailConfirmationLayoutComponent;
  let fixture: ComponentFixture<EmailConfirmationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailConfirmationLayoutComponent],
      imports: [RouterTestingModule, LayoutModule],
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
