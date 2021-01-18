import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ClrDatagridModule,
  ClrDropdownModule,
  ClrIconModule,
} from '@clr/angular';
import { ContentLoaderModule } from '@fereji/modules/shared/content-loader/content-loader.module';

import { SourceDataPreviewComponent } from './source-data-preview.component';

describe('SourceDataPreviewComponent', () => {
  let component: SourceDataPreviewComponent;
  let fixture: ComponentFixture<SourceDataPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceDataPreviewComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ContentLoaderModule,
        ClrDatagridModule,
        ClrIconModule,
        ClrDropdownModule,
      ],
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
