import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';

import { AsideComponent } from './aside.component';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideComponent],
      imports: [ClrIconModule, ClrVerticalNavModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
