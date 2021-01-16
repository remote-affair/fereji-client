import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SourceDetailsComponent } from './source-details.component';

describe('SourceDetailsComponent', () => {
  let component: SourceDetailsComponent;
  let fixture: ComponentFixture<SourceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceDetailsComponent],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
