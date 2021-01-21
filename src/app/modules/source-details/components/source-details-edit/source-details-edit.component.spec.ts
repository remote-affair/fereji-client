import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDetailsEditComponent } from './source-details-edit.component';

describe('SourceDetailsEditComponent', () => {
  let component: SourceDetailsEditComponent;
  let fixture: ComponentFixture<SourceDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceDetailsEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
