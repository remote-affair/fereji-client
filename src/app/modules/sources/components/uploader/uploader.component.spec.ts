import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ClrIconModule,
  ClrInputModule,
  ClrModalModule,
  ClrSelectModule,
} from '@clr/angular';

import { UploaderComponent } from './uploader.component';

describe('UploaderComponent', () => {
  let component: UploaderComponent;
  let fixture: ComponentFixture<UploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploaderComponent],
      imports: [
        ReactiveFormsModule,
        ClrInputModule,
        ClrModalModule,
        HttpClientModule,
        ClrSelectModule,
        ClrIconModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
