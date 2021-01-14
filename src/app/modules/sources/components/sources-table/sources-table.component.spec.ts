import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesTableComponent } from './sources-table.component';

describe('SourcesTableComponent', () => {
  let component: SourcesTableComponent;
  let fixture: ComponentFixture<SourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcesTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
