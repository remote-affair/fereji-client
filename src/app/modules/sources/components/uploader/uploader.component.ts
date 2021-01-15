import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';
import { Observable } from 'rxjs';

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly siloService: DataSiloService,
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
      console.log({ file });

      this.uploaderForm.get('file')?.setValue(file);
      this.uploaderForm.get('silo_name')?.setValue(file.name);
    } else {
      this.uploaderForm.get('file')?.reset();
    }
  }

  upload() {
    if (this.uploaderForm.valid) {
      console.log(this.uploaderForm.value);

      const formData = new FormData();

      Object.entries(this.uploaderForm.value).forEach(([name, value]) => {
        formData.append(name, value as any);
      });

      console.log({ formData });

      const sub = this.siloService.upload(formData).subscribe({
        next: resp => {
          console.log({ resp });
        },
        error: err => {
          console.log({ err });
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
