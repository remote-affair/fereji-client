import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import {
  ClrDatagridModule,
  ClrDropdownModule,
  ClrIconModule,
} from '@clr/angular';
import { SourcesModule } from '../../sources.module';

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
        RouterTestingModule,
        SourcesModule,
        BrowserAnimationsModule,
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
