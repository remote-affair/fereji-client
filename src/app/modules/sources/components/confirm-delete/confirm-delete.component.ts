import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataSource } from '@fereji/models/data-source';
import { DataSiloService } from '@fereji/services/apis/data-silo/data-silo.service';

@Component({
  selector: 'frj-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
})
export class ConfirmDeleteComponent implements OnInit {
  @Input()
  visible = false;

  @Input()
  silo!: DataSource;

  @Output()
  visibleChange = new EventEmitter<boolean>();

  isDeleting = false;
  showError = false;
  errorMessage = '';

  constructor(private readonly siloService: DataSiloService) {}

  ngOnInit(): void {}

  close() {
    this.visibleChange.emit(false);
  }

  delete() {
    this.isDeleting = true;
    this.showError = false;

    const sub = this.siloService.deleteDataSilo(this.silo.silo_uuid).subscribe({
      next: () => {
        this.close();
      },

      error: err => {
        this.isDeleting = false;
        this.errorMessage = err.error.detail;
        this.showError = true;

        if (sub) {
          sub.unsubscribe();
        }
      },

      complete: () => {
        this.isDeleting = false;

        if (sub) {
          sub.unsubscribe();
        }
      },
    });
  }
}
