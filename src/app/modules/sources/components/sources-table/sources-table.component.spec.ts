import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ClrDatagridModule,
  ClrDropdownModule,
  ClrIconModule,
} from '@clr/angular';

import { UploaderModule } from '../uploader/uploader.module';
import { SourcesTableComponent } from './sources-table.component';

describe('SourcesTableComponent', () => {
  let component: SourcesTableComponent;
  let fixture: ComponentFixture<SourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcesTableComponent],
      imports: [
        UploaderModule,
        HttpClientModule,
        ClrIconModule,
        ClrDatagridModule,
        ClrDropdownModule,
      ],
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
