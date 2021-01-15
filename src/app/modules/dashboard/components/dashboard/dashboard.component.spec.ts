import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { SourcesDashboardModule } from '@fereji/modules/sources/components/sources-dashboard/sources-dashboard.module';
import { UploaderModule } from '@fereji/modules/sources/components/uploader/uploader.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        ClrIconModule,
        UploaderModule,
        HttpClientModule,
        SourcesDashboardModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
