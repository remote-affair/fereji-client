import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOffsetTitleComponent } from './top-offset-title.component';

describe('TopOffsetTitleComponent', () => {
  let component: TopOffsetTitleComponent;
  let fixture: ComponentFixture<TopOffsetTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopOffsetTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOffsetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
