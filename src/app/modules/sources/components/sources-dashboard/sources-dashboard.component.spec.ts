import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentLoaderModule } from '@fereji/modules/shared/content-loader/content-loader.module';

import { SourcesDashboardComponent } from './sources-dashboard.component';

describe('SourcesDashboardComponent', () => {
  let component: SourcesDashboardComponent;
  let fixture: ComponentFixture<SourcesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcesDashboardComponent],
      imports: [HttpClientModule, ContentLoaderModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
