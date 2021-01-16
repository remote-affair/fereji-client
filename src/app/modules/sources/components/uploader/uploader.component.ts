import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';
import { DataSource } from '@fereji/models/data-source';

@Component({
  selector: 'frj-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  uploaderForm!: FormGroup;
  sources$!: Observable<Array<any>>;
  showError = false;
  errorMessage = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly siloService: DataSiloService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.setSources$();
    this.initForm();
  }

  closed() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  fileSelected(event: any) {
    if (event.target.files.length) {
      const file = event.target.files[0];

      this.uploaderForm.patchValue({ file, silo_name: file.name });
    } else {
      this.uploaderForm.patchValue({ file: null, silo_name: '' });
    }
  }

  upload() {
    if (this.uploaderForm.valid) {
      if (!this.uploaderForm.value.silo_label.trim()) {
        const siloName = this.uploaderForm.get('silo_name')?.value || '';
        this.uploaderForm.patchValue({
          silo_label: siloName.split('.')[0].trim(),
        });
      }

      const formData = new FormData();

      Object.entries(this.uploaderForm.value).forEach(([name, value]) => {
        formData.append(name, value as any);
      });

      const sub = this.siloService.upload(formData).subscribe({
        next: (resp: DataSource) => {
          this.router.navigate(['/data/sources', resp.silo_uuid]);
        },
        error: err => {
          this.showError = true;
          this.errorMessage = err.statusText;
        },
        complete: () => {
          if (sub) {
            sub.unsubscribe();
          }
        },
      });
    }
  }

  private initForm() {
    this.uploaderForm = this.fb.group({
      file: [null, Validators.required],
      silo_name: ['', Validators.required],
      silo_label: [''],
      source: [null, [Validators.required]],
    });
  }

  private setSources$() {
    this.sources$ = this.siloService.getDataSourceTypes();
  }
}
