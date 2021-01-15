import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'frj-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  uploaderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
    }
  }

  private initForm() {
    this.uploaderForm = this.fb.group({
      file: [null, Validators.required],
      silo_name: ['', Validators.required],
      silo_label: [''],
    });
  }
}
