import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDataPreviewComponent } from './source-data-preview.component';

describe('SourceDataPreviewComponent', () => {
  let component: SourceDataPreviewComponent;
  let fixture: ComponentFixture<SourceDataPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceDataPreviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDataPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
