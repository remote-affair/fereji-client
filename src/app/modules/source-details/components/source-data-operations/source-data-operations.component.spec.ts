import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDataOperationsComponent } from './source-data-operations.component';

describe('SourceDataOperationsComponent', () => {
  let component: SourceDataOperationsComponent;
  let fixture: ComponentFixture<SourceDataOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceDataOperationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDataOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
