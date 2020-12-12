import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLayoutComponent } from './guest-layout.component';

describe('GuestLayoutComponent', () => {
  let component: GuestLayoutComponent;
  let fixture: ComponentFixture<GuestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestLayoutComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
